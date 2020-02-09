import React from 'react';

import { WidgetProps } from 'react-jsonschema-form';
import { TextField } from '@material-ui/core';
import { getMuiOptions, getMuiInputOptions } from '../utils';

const UpDownWidget = (widgetProps: WidgetProps) => {
  return (
    <TextField
      fullWidth={true}
      type="number"
      {...getMuiInputOptions({ widgetProps, valueCleanser: v => v || '' })}
      {...getMuiOptions(widgetProps.options)}
    />
  );
};

export default UpDownWidget;
