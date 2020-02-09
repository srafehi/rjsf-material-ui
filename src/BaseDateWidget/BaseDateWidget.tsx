import React, { useMemo } from 'react';

import { WidgetProps } from 'react-jsonschema-form';
import {
  DateTimePicker,
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsAdapter from '@date-io/date-fns';
import { getMuiOptions, getMuiInputOptions } from '../utils';

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

  const dateAdapter = useMemo<DateFnsAdapter>(() => new DateFnsAdapter(), []);
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
    <MuiPickersUtilsProvider utils={DateFnsAdapter}>
      <Component
        fullWidth={true}
        onChange={muiOnChange}
        format={format}
        clearable={true}
        {...{ ...inputOptions, onChange: muiOnChange }}
        {...muiOptions}
      />
    </MuiPickersUtilsProvider>
  );
};

export default BaseDateWidget;
