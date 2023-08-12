import pytest
from .device_metrics import DeviceName, new_device


@pytest.fixture
def new_device_instance():
    return (
        new_device(
            device=DeviceName.iPhone_SE,
            width=640,
            height=1136,
            pixel_ratio=2.0,
        )
    )


def test_new_device(capsys, new_device_instance):
    with capsys.disabled():
        print()
        print(f"\t{new_device_instance}")

    # assert new_device == "iPhone SE"
