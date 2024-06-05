import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const ConfigurationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="additional_params" source="additionalParams" />
        <TextField label="arch" source="arch" />
        <TextField label="boot_drive" source="bootDrive" />
        <TextField label="cdrom" source="cdrom" />
        <TextField label="cpus" source="cpus" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="enable_kvm" source="enableKvm" />
        <TextField label="floppy" source="floppy" />
        <TextField label="hdd" source="hdd" />
        <TextField label="ID" source="id" />
        <TextField label="memory" source="memory" />
        <TextField label="name" source="name" />
        <TextField label="sound_card" source="soundCard" />
        <TextField label="uefi_firmware" source="uefiFirmware" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="video_card" source="videoCard" />
      </SimpleShowLayout>
    </Show>
  );
};
