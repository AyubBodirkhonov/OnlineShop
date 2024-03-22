import React from "react";
import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";
export default function FormInput({ label, ...otherProps }) {
  return (
    <Group className="group">
      <Input {...otherProps} className="form-input" />

      {label && (
        <FormInputLabel shrink={otherProps.value?.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}
