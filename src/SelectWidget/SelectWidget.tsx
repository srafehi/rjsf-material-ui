import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';

import { getMuiOptions, getMuiInputOptions, getEnums } from '../utils';
import { TextField } from '@material-ui/core';
import { WidgetProps } from 'react-jsonschema-form';

type ExtendedWidgetProps = WidgetProps & {
  options: any;
  multiple: any;
};

const SelectWidget = (widgetProps: ExtendedWidgetProps) => {
  const { enumOptions, enumDisabled } = widgetProps.options;

  const emptyValue = widgetProps.multiple ? [] : '';
  const inputOptions = getMuiInputOptions({
    widgetProps,
    valueCleanser: value => (typeof value === 'undefined' ? emptyValue : value),
  });

  return (
    <TextField
      fullWidth={true}
      select
      SelectProps={{
        multiple:
          typeof widgetProps.multiple === 'undefined'
            ? false
            : widgetProps.multiple,
        disabled: inputOptions.disabled,
      }}
      {...inputOptions}
      {...getMuiOptions(widgetProps.options)}
    >
      {getEnums(enumOptions, enumDisabled).map(e => (
        <MenuItem key={e.key} value={e.value} disabled={e.disabled}>
          {e.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectWidget;
