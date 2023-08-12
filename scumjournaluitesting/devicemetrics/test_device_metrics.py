from .device_metrics import DeviceName, new_device

DEVICE_NAME_INSTANCE_TO_BE_TESTED = DeviceName.iPhone_SE
DEVICE_METRICS_DICT_FROM_INSTANCE = {
    'deviceMetrics': {
        'width': 320,
        'height': 568,
        'pixelRatio': 2,
    }
}


def test_new_device(new_device_instance):
    assert new_device_instance.name == DEVICE_NAME_INSTANCE_TO_BE_TESTED.name


def test_device_metrics(new_device_instance):
    assert new_device_instance.get_device_metrics() == DEVICE_METRICS_DICT_FROM_INSTANCE


def test_special_symbols_in_enum_name(special_symbol_names):
    enum, expected = special_symbol_names
    assert enum.name == expected


def test_special_symbols_in_enum_from_new_device_constructor(special_symbol_names):
    enum, expected = special_symbol_names

    device = new_device(
        device=enum,
        # the next three arguments doesn't matter for this test
        width=0,
        height=0,
        pixel_ratio=0,
    )

    assert device.name == expected
