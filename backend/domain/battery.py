from dataclasses import dataclass

@dataclass
class BatteryEntry:
    id: str
    voltage: float

    @classmethod
    def create_from_content(cls, id:str, voltage: str) -> "BatteryEntry":
        return cls(id=id, voltage=voltage)
