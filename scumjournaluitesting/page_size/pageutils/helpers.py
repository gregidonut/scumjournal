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


def window_width_is_not_less_than_article_width(driver: webdriver.Chrome) -> bool:
    return driver.execute_script(
        """
        const element = document.querySelector('article');
        const style = window.getComputedStyle(element);
        const width = element.offsetWidth; // width including padding and border
        const marginLeft = parseFloat(style.marginLeft);
        const marginRight = parseFloat(style.marginRight);
        const totalWidthIncludingMargin = width + marginLeft + marginRight;
        
        return !( window.innerWidth < totalWidthIncludingMargin )
        """
    )


def get_body_and_window_height(scroll_to_bottom: bool, driver: webdriver.Chrome):
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
