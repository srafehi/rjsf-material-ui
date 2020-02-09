import React from 'react';

import TextField from '@material-ui/core/TextField';

import { WidgetProps } from 'react-jsonschema-form';
import { getMuiOptions, getMuiInputOptions } from '../utils';

const TextWidget = (widgetProps: WidgetProps) => {
  return (
    <TextField
      fullWidth={true}
      type="text"
      {...getMuiInputOptions({ widgetProps, valueCleanser: v => v || '' })}
      {...getMuiOptions(widgetProps.options)}
    />
  );
};

export default TextWidget;
