import React from 'react';

import TextField from '@material-ui/core/TextField';

import { WidgetProps } from 'react-jsonschema-form';
import { getMuiOptions } from '../utils';

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
}: WidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <TextField
      fullWidth={true}
      id={id}
      label={label || schema.title}
      autoFocus={autofocus}
      required={required}
      disabled={disabled || readonly}
      type="text"
      value={value ? value : ''}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      {...getMuiOptions(options)}
    />
  );
};

export default TextWidget;
