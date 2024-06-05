import { AdditionalSettings as TAdditionalSettings } from "../api/additionalSettings/AdditionalSettings";

export const ADDITIONALSETTINGS_TITLE_FIELD = "id";

export const AdditionalSettingsTitle = (
  record: TAdditionalSettings
): string => {
  return record.id?.toString() || String(record.id);
};
