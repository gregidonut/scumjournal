import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

IMPLICIT_WAIT_TIME = 10
URL = "http://localhost:5173/"


@pytest.fixture
def desktop_driver():
    options = Options()
    options.add_argument("--headless")

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=options,
    )
    driver.implicitly_wait(IMPLICIT_WAIT_TIME)
    driver.get(URL)

    yield driver

    driver.quit()


@pytest.fixture(params=[
    "iPhone SE",
    "iPad Mini",
])
def mobile_driver(request):
    device_name = request.param

    options = Options()
    options.add_argument("--headless")
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
