import React from 'react';

import { WidgetProps } from 'react-jsonschema-form';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsAdapter from '@date-io/date-fns';
import { getMuiOptions } from '../utils';

const DateTimeWidget = ({
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
  placeholder,
}: WidgetProps) => {
  const dateAdapter = new DateFnsAdapter();

  const _onChange = (date: any) => {
    onChange(date ? date.toISOString() : undefined);
  };
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const muiOptions: any = getMuiOptions(options);
  muiOptions.inputVariant = muiOptions.variant;

  return (
    <MuiPickersUtilsProvider utils={DateFnsAdapter}>
      <DateTimePicker
        fullWidth={true}
        id={id}
        label={label || schema.title}
        placeholder={placeholder}
        autoFocus={autofocus}
        required={required}
        disabled={disabled || readonly}
        value={value ? dateAdapter.date(value) : null}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        clearable
        format="hh:mm:ss a - MMMM do, yyyy"
        {...muiOptions}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateTimeWidget;
