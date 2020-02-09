import React from 'react';

import TextField from '@material-ui/core/TextField';

import { WidgetProps } from 'react-jsonschema-form';
import { getMuiInputOptions, getMuiOptions } from '../utils';

const PasswordWidget = (widgetProps: WidgetProps) => {
  return (
    <TextField
      fullWidth={true}
      type="password"
      {...getMuiInputOptions({ widgetProps, valueCleanser: v => v || '' })}
      {...getMuiOptions(widgetProps.options)}
    />
  );
};

export default PasswordWidget;
