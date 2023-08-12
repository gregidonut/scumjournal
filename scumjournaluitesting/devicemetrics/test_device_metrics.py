import pytest
from .device_metrics import DeviceName, new_device

DEVICE_NAME_INSTANCE_TO_BE_TESTED = DeviceName.iPhone_SE
DEVICE_METRICS_DICT_FROM_INSTANCE = {
    'deviceMetrics': {
        'width': 320,
        'height': 568,
        'pixelRatio': 2,
    }
}


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


def test_new_device(new_device_instance):
    assert new_device_instance.name == DEVICE_NAME_INSTANCE_TO_BE_TESTED.name


def test_device_metrics(new_device_instance):
    assert new_device_instance.get_device_metrics() == DEVICE_METRICS_DICT_FROM_INSTANCE
