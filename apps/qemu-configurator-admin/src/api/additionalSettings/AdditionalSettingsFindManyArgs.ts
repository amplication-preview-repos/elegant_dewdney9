import { AdditionalSettingsWhereInput } from "./AdditionalSettingsWhereInput";
import { AdditionalSettingsOrderByInput } from "./AdditionalSettingsOrderByInput";

export type AdditionalSettingsFindManyArgs = {
  where?: AdditionalSettingsWhereInput;
  orderBy?: Array<AdditionalSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
