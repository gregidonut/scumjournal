def test_body_height_on_desktop(desktop_driver):
    driver = desktop_driver
    body_height = driver.execute_script("return document.body.offsetHeight")
    window_height = driver.execute_script("return window.innerHeight")
    assert body_height == window_height


def test_body_height_on_mobile(mobile_driver):
    driver = mobile_driver
    body_height = driver.execute_script("return document.body.offsetHeight")
    window_height = driver.execute_script("return window.innerHeight")
    assert body_height == window_height
