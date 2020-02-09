import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { WidgetProps } from 'react-jsonschema-form';
import { getMuiInputOptions, getMuiOptions } from '../utils';

const CheckboxWidget = (widgetProps: WidgetProps) => {
  const inputOptions = getMuiInputOptions({
    widgetProps,
    valueCleanser: value => (typeof value === 'undefined' ? false : value),
  });
  const muiOnChange = ({}, checked: boolean) => widgetProps.onChange(checked);

  return (
    <FormControl fullWidth={true}>
      <FormControlLabel
        control={
          <Checkbox
            id={inputOptions.id}
            checked={inputOptions.value}
            required={inputOptions.required}
            disabled={inputOptions.disabled}
            autoFocus={inputOptions.autoFocus}
            onChange={muiOnChange}
            onBlur={inputOptions.onBlur}
            onFocus={inputOptions.onFocus}
            {...getMuiOptions(widgetProps.options)}
          />
        }
        label={inputOptions.label}
      />
    </FormControl>
  );
};

export default CheckboxWidget;
