from selenium import webdriver


def body_and_header_width(driver: webdriver.Chrome):
    body_width = driver.execute_script("return document.body.offsetWidth")
    header_width = driver.execute_script(
        "return document.querySelector('header').offsetWidth"
    )

    return body_width, header_width


def body_and_main_width(driver: webdriver.Chrome):
    body_width = driver.execute_script("return document.body.offsetWidth")
    main_width = driver.execute_script(
        "return document.querySelector('main').offsetWidth"
    )

    return body_width, main_width


def body_and_window_width(driver: webdriver.Chrome):
    body_width = driver.execute_script("return document.body.offsetWidth")
    window_width = driver.execute_script(
        "return window.innerWidth"
    )

    return body_width, window_width


def test_body_and_header_width_on_desktop(desktop_driver):
    driver = desktop_driver

    body_width, header_width = body_and_header_width(driver)
    assert body_width == header_width


def test_body_and_main_width_on_desktop(desktop_driver):
    driver = desktop_driver

    body_width, main_width = body_and_main_width(driver)
    assert body_width == main_width


def test_body_and_window_width_on_desktop(desktop_driver):
    driver = desktop_driver

    body_width, window_width = body_and_window_width(driver)
    assert body_width == window_width


def test_body_height_on_mobile(mobile_driver):
    driver = mobile_driver

    body_width, header_width = body_and_header_width(driver)
    assert body_width == header_width


def test_body_and_main_on_mobile(mobile_driver):
    driver = mobile_driver

    body_width, main_width = body_and_main_width(driver)
    assert body_width == main_width


def test_body_and_window_width_on_mobile(mobile_driver):
    driver = mobile_driver

    body_width, window_width = body_and_window_width(driver)
    assert body_width == window_width
