import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="additional_params" source="additionalParams" />
        <TextInput label="arch" source="arch" />
        <SelectInput
          source="bootDrive"
          label="boot_drive"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="cdrom" source="cdrom" />
        <NumberInput step={1} label="cpus" source="cpus" />
        <BooleanInput label="enable_kvm" source="enableKvm" />
        <TextInput label="floppy" source="floppy" />
        <TextInput label="hdd" source="hdd" />
        <NumberInput step={1} label="memory" source="memory" />
        <TextInput label="name" source="name" />
        <SelectInput
          source="soundCard"
          label="sound_card"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="uefi_firmware" source="uefiFirmware" />
        <SelectInput
          source="videoCard"
          label="video_card"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
