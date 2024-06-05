import { Hardware as THardware } from "../api/hardware/Hardware";

export const HARDWARE_TITLE_FIELD = "id";

export const HardwareTitle = (record: THardware): string => {
  return record.id?.toString() || String(record.id);
};
