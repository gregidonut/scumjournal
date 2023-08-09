import pytest
from pytest_lazyfixture import lazy_fixture
import pageutils.utils


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
        pageutils.utils.get_header_width,
        pageutils.utils.get_main_width,
        pageutils.utils.get_window_width,
    ]
)
def test_body_width(driver, against):
    body_width = pageutils.utils.get_body_width(driver)
    against = against(driver)
    assert body_width == against
