import React, { useMemo } from 'react';
import { WidgetProps } from 'react-jsonschema-form';
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
  TimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import { getMuiInputOptions, getMuiOptions } from '../utils';
import { TextField } from '@material-ui/core';

interface BaseDateWidgetProps {
  type: 'date-time' | 'date' | 'time';
  widgetProps: WidgetProps;
  format: string;
  dateFormatter: (date: Date) => string;
}

const BaseDateWidget = ({
  type,
  widgetProps,
  format,
  dateFormatter,
}: BaseDateWidgetProps) => {
  let Component;
  switch (type) {
    case 'date':
      Component = DatePicker;
      break;
    case 'time':
      Component = TimePicker;
      break;
    case 'date-time':
    default:
      Component = DateTimePicker;
  }

  const dateAdapter = useMemo<DateFnsUtils>(() => new DateFnsUtils(), []);
  const inputOptions = getMuiInputOptions({
    widgetProps,
    valueCleanser: value => (value ? dateAdapter.date(value) : null),
  });

  const muiOnChange = (date?: Date) => {
    widgetProps.onChange(date ? dateFormatter(date) : undefined);
  };
  const muiOptions: any = getMuiOptions(widgetProps.options);
  muiOptions.inputVariant = muiOptions.variant;

  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <Component
        renderInput={props => <TextField {...props} />}
        fullWidth={true}
        onChange={muiOnChange}
        format={format}
        clearable={true}
        {...{ ...inputOptions, onChange: muiOnChange }}
        {...muiOptions}
      />
    </LocalizationProvider>
  );
};

export default BaseDateWidget;
