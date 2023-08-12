from dataclasses import dataclass
from enum import Enum, auto


class DeviceName(Enum):
    iPhone_SE = auto()
    iPhone_XR = auto()
    iPhone_12_Pro = auto()
    Pixel_5 = auto()
    Samsung_Galaxy_S8plus = auto()
    Samsung_Galaxy_S20_Ultra = auto()
    iPad_Air = auto()
    iPad_Mini = auto()
    Surface_Pro_7 = auto()
    Surface_Duo = auto()
    Galaxy_Fold = auto()
    Samsung_Galaxy_A51slash71 = auto()


@dataclass
class Device:
    enum: DeviceName = None
    name: str = None
    width: int = None
    height: int = None
    pixel_ratio: float = None

    def __str__(self):
        return self.name

    def __repr__(self):
        return self.name

    def set_device_name(self):
        self.name = self.enum.name

    def get_device_metrics(self) -> dict:
        return {
            "deviceMetrics": {
                "width": self.width,
                "height": self.height,
                "pixelRatio": self.pixel_ratio
            },
        }


def new_device(device: DeviceName, width, height, pixel_ratio):
    device_instance = Device(
        enum=DeviceName(device),
        width=width,
        height=height,
        pixel_ratio=pixel_ratio
    )

    device_instance.set_device_name()

    return device_instance
