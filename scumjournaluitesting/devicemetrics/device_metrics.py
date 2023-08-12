from dataclasses import dataclass
from enum import Enum, auto
from types import DynamicClassAttribute


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

    @DynamicClassAttribute
    def name(self) -> str:
        """
        Accounting for special symbols in enum.name
        """
        default_name = super(DeviceName, self).name
        word_list = default_name.split("_")
        new_word_list = []
        for word in word_list:
            if "slash" in word:
                new_word_list.append(word.replace("slash", "/"))
                continue
            if "plus" in word:
                new_word_list.append(word.replace("plus", "+"))
                continue
            new_word_list.append(word)

        new_word = " ".join(new_word_list)
        return new_word


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

    def landscape(self):
        self.width, self.height = self.height, self.width


def new_device(device: DeviceName, width, height, pixel_ratio):
    device_instance = Device(
        enum=device,
        width=width,
        height=height,
        pixel_ratio=pixel_ratio
    )

    device_instance.set_device_name()

    return device_instance
