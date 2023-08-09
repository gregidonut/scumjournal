import pytest
from pytest_lazyfixture import lazy_fixture
from selenium import webdriver


def get_body_width(driver: webdriver.Chrome):
    body_width = driver.execute_script(
        "return document.body.offsetWidth"
    )

    return body_width


def get_header_width(driver: webdriver.Chrome):
    header_width = driver.execute_script(
        "return document.querySelector('header').offsetWidth"
    )

    return header_width


def get_main_width(driver: webdriver.Chrome):
    main_width = driver.execute_script(
        "return document.querySelector('main').offsetWidth"
    )

    return main_width


def get_window_width(driver: webdriver.Chrome):
    window_width = driver.execute_script(
        "return window.innerWidth"
    )

    return window_width


@pytest.mark.parametrize(
    "driver",
    [
        lazy_fixture("desktop_driver"),
        lazy_fixture("mobile_driver"),
    ]
)
@pytest.mark.parametrize(
    "against",
    [
        get_header_width,
        get_main_width,
        get_window_width,
    ]
)
def test_body_width(driver, against):
    body_width = get_body_width(driver)
    against = against(driver)
    assert body_width == against
