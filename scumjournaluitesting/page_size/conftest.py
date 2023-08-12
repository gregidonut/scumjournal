import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from requests.exceptions import ConnectionError, ChunkedEncodingError
from scumjournaluitesting.page_size.device_instances import devices

IMPLICIT_WAIT_TIME = 10
URL = "http://localhost:5173/"
MAX_RETRIES = 6


@pytest.fixture
def default_options():
    options = Options()
    options.add_argument("--headless")
    options.add_argument("--incognito")

    return options


def instantiate_driver(options: Options) -> webdriver.Chrome:
    service: str = ""
    for i in range(MAX_RETRIES):
        try:
            service = ChromeDriverManager().install()
            break
        except ConnectionError:
            if i + 1 == MAX_RETRIES:
                print(f"retried {i + 1} times")
                raise
            print(f"retried {i + 1} times")
        except ChunkedEncodingError:
            if i + 1 == MAX_RETRIES:
                print(f"retried {i + 1} times")
                raise
            print(f"retried {i + 1} times")

    driver = webdriver.Chrome(
        service=Service(service),  # TODO: figure out a better naming convention here
        options=options,
    )
    driver.implicitly_wait(IMPLICIT_WAIT_TIME)
    driver.get(URL)
    driver.maximize_window()

    return driver


@pytest.fixture
def desktop_driver(default_options):
    driver = instantiate_driver(default_options)
    yield driver

    driver.quit()


@pytest.fixture(params=devices)
def mobile_devices(request):
    return request.param


@pytest.fixture(params=[False, True])
def mobile_driver(request, default_options, mobile_devices):
    device = mobile_devices
    landscape = request.param
    if landscape:
        device.landscape()

    mobile_options = default_options
    mobile_options.add_experimental_option(
        "mobileEmulation", device.get_device_metrics()
    )

    driver = instantiate_driver(mobile_options)
    yield driver

    driver.quit()
