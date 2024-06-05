import { SortOrder } from "../../util/SortOrder";

export type ConfigurationOrderByInput = {
  additionalParams?: SortOrder;
  arch?: SortOrder;
  bootDrive?: SortOrder;
  cdrom?: SortOrder;
  cpus?: SortOrder;
  createdAt?: SortOrder;
  enableKvm?: SortOrder;
  floppy?: SortOrder;
  hdd?: SortOrder;
  id?: SortOrder;
  memory?: SortOrder;
  name?: SortOrder;
  soundCard?: SortOrder;
  uefiFirmware?: SortOrder;
  updatedAt?: SortOrder;
  videoCard?: SortOrder;
};
