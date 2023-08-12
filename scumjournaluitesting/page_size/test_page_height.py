import pytest
from pytest_lazyfixture import lazy_fixture
import scumjournaluitesting.page_size.pageutils.helpers as helpers


@pytest.mark.parametrize(
    "driver",
    [
        lazy_fixture("desktop_driver"),
        lazy_fixture("mobile_driver"),
    ]
)
def test_body_height(driver):
    for s in [False, True]:
        body_height, window_height = helpers.get_body_and_window_height(
            scroll_to_bottom=s, driver=driver
        )
        assert body_height == window_height
