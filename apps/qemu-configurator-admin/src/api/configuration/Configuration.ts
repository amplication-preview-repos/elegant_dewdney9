export type Configuration = {
  additionalParams: string | null;
  arch: string | null;
  bootDrive?: "Option1" | null;
  cdrom: string | null;
  cpus: number | null;
  createdAt: Date;
  enableKvm: boolean | null;
  floppy: string | null;
  hdd: string | null;
  id: string;
  memory: number | null;
  name: string | null;
  soundCard?: "Option1" | null;
  uefiFirmware: string | null;
  updatedAt: Date;
  videoCard?: "Option1" | null;
};
