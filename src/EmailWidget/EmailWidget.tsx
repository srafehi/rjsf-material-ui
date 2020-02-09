import React from 'react';

import TextField from '@material-ui/core/TextField';

import { WidgetProps } from 'react-jsonschema-form';
import { getMuiInputOptions, getMuiOptions } from '../utils';

const EmailWidget = (widgetProps: WidgetProps) => {
  return (
    <TextField
      fullWidth={true}
      type="email"
      {...getMuiInputOptions({ widgetProps, valueCleanser: v => v || '' })}
      {...getMuiOptions(widgetProps.options)}
    />
  );
};

export default EmailWidget;
