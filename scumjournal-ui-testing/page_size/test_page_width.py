import pytest
from pytest_lazyfixture import lazy_fixture
import pageutils.helpers


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
        pageutils.helpers.get_header_width,
        pageutils.helpers.get_main_width,
        pageutils.helpers.get_window_width,
    ]
)
def test_body_width(driver, against):
    body_width = pageutils.helpers.get_body_width(driver)
    against = against(driver)
    assert body_width == against


@pytest.mark.parametrize(
    "driver",
    [
        lazy_fixture("desktop_driver"),
        lazy_fixture("mobile_driver"),
    ]
)
def test_window_width_is_not_less_than_article_width(driver):
    assert pageutils.helpers.window_width_is_not_less_than_article_width(driver)
