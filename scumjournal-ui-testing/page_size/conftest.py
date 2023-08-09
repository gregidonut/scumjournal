import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

IMPLICIT_WAIT_TIME = 10
URL = "http://localhost:5173/"


@pytest.fixture
def default_options():
    options = Options()
    options.add_argument("--headless")

    return options


@pytest.fixture
def desktop_driver(default_options):
    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=default_options,
    )
    driver.implicitly_wait(IMPLICIT_WAIT_TIME)
    driver.get(URL)

    yield driver

    driver.quit()


@pytest.fixture(params=[
    "iPhone SE",
    "iPad Mini",
])
def mobile_driver(request, default_options):
    device_name = request.param

    options = default_options
    options.add_experimental_option(
        "mobileEmulation", {"deviceName": device_name}
    )

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options,
    )
    driver.implicitly_wait(IMPLICIT_WAIT_TIME)
    driver.get(URL)

    yield driver

    driver.quit()
