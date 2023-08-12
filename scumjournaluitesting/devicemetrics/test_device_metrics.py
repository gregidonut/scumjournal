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


@pytest.fixture(params=[

    (DeviceName.Samsung_Galaxy_A51slash71, "Samsung Galaxy A51/71"),
    (DeviceName.Samsung_Galaxy_S8plus, "Samsung Galaxy S8+"),
])
def special_symboled_names(request):
    return request.param


def test_special_symbols_in_enum_name(special_symboled_names):
    enum, expected = special_symboled_names
    assert enum.name == expected


def test_special_symbols_in_enum_from_new_device_constructor(special_symboled_names):
    enum, expected = special_symboled_names

    device = new_device(
        device=enum,
        # the next three arguments doesn't matter for this test
        width=0,
        height=0,
        pixel_ratio=0,
    )

    assert device.name == expected
