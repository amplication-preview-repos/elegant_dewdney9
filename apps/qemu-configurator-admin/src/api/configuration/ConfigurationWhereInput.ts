import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConfigurationWhereInput = {
  additionalParams?: StringNullableFilter;
  arch?: StringNullableFilter;
  bootDrive?: "Option1";
  cdrom?: StringNullableFilter;
  cpus?: IntNullableFilter;
  enableKvm?: BooleanNullableFilter;
  floppy?: StringNullableFilter;
  hdd?: StringNullableFilter;
  id?: StringFilter;
  memory?: IntNullableFilter;
  name?: StringNullableFilter;
  soundCard?: "Option1";
  uefiFirmware?: StringNullableFilter;
  videoCard?: "Option1";
};
