import pytest
from .device_metrics import DeviceName, new_device

DEVICE_NAME_INSTANCE_TO_BE_TESTED = DeviceName.iPhone_SE


@pytest.fixture
def new_device_instance():
    return (
        new_device(
            device=DEVICE_NAME_INSTANCE_TO_BE_TESTED,
            width=640,
            height=1136,
            pixel_ratio=2.0,
        )
    )


def test_new_device(new_device_instance):
    assert new_device_instance.name == DEVICE_NAME_INSTANCE_TO_BE_TESTED.name
