import React from 'react';

import { WidgetProps } from 'react-jsonschema-form';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsAdapter from '@date-io/date-fns';
import { getMuiOptions } from '../utils';

const DateWidget = ({
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
    // TODO return just date
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
      <DatePicker
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
        format="MMMM do, yyyy"
        {...muiOptions}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateWidget;
