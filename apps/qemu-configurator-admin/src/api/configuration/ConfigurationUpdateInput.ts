export type ConfigurationUpdateInput = {
  additionalParams?: string | null;
  arch?: string | null;
  bootDrive?: "Option1" | null;
  cdrom?: string | null;
  cpus?: number | null;
  enableKvm?: boolean | null;
  floppy?: string | null;
  hdd?: string | null;
  memory?: number | null;
  name?: string | null;
  soundCard?: "Option1" | null;
  uefiFirmware?: string | null;
  videoCard?: "Option1" | null;
};
