import pytest
from .device_metrics import DeviceName, new_device

DEVICE_NAME_INSTANCE_TO_BE_TESTED = DeviceName.iPhone_SE


@pytest.fixture
def new_device_instance():
    return (
        new_device(
            device=DEVICE_NAME_INSTANCE_TO_BE_TESTED,
            width=320,
            height=568,
            pixel_ratio=2.0,
        )
    )


@pytest.fixture(params=[
    (DeviceName.Samsung_Galaxy_A51slash71, "Samsung Galaxy A51/71"),
    (DeviceName.Samsung_Galaxy_S8plus, "Samsung Galaxy S8+"),
])
def special_symbol_names(request):
    return request.param
