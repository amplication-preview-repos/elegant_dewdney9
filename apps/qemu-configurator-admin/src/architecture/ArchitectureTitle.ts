import { Architecture as TArchitecture } from "../api/architecture/Architecture";

export const ARCHITECTURE_TITLE_FIELD = "id";

export const ArchitectureTitle = (record: TArchitecture): string => {
  return record.id?.toString() || String(record.id);
};
