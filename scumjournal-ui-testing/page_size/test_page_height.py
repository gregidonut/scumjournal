from selenium import webdriver


def body_and_window_height(scroll_to_bottom: bool, driver: webdriver.Chrome):
    if scroll_to_bottom:
        # scroll to bottom of page targeting main tag
        # since body tag cant be scrolled because of it's size
        driver.execute_script(
            """
            document.querySelector('main').scrollTo(
                0, 
                document.querySelector('main').scrollHeight,
            );
            """
        )

    body_height = driver.execute_script("return document.body.offsetHeight")
    window_height = driver.execute_script("return window.innerHeight")

    return body_height, window_height


def test_body_height_on_desktop(desktop_driver):
    driver = desktop_driver

    for s in [False, True]:
        body_height, window_height = body_and_window_height(
            scroll_to_bottom=s, driver=driver
        )
        assert body_height == window_height


def test_body_height_on_mobile(mobile_driver):
    driver = mobile_driver

    for s in [False, True]:
        body_height, window_height = body_and_window_height(
            scroll_to_bottom=s, driver=driver
        )
        assert body_height == window_height
