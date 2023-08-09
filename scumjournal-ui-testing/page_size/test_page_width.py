from selenium import webdriver


def body_and_header_width(driver: webdriver.Chrome):
    body_width = driver.execute_script("return document.body.offsetWidth")
    header_width = driver.execute_script(
        "return document.querySelector('header').offsetWidth"
    )

    return body_width, header_width


def test_body_header_width_on_desktop(desktop_driver):
    driver = desktop_driver

    body_width, header_width = body_and_header_width(driver)
    assert body_width == header_width


def test_body_height_on_mobile(mobile_driver):
    driver = mobile_driver

    body_width, header_width = body_and_header_width(driver)
    assert body_width == header_width
