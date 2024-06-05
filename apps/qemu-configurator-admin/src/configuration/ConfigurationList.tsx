import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ConfigurationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Configurations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
