import React from 'react';

import { WidgetProps } from 'react-jsonschema-form';

import TextField from '@material-ui/core/TextField';
import { getMuiInputOptions, getMuiOptions } from '../utils';

type WidgetWithOptionsProps = WidgetProps & {
  options: any;
};

const TextareaWidget = (widgetProps: WidgetWithOptionsProps) => {
  return (
    <TextField
      fullWidth={true}
      type="text"
      multiline={true}
      rows={widgetProps.options.rows || 5}
      {...getMuiInputOptions({ widgetProps, valueCleanser: v => v || '' })}
      {...getMuiOptions(widgetProps.options)}
    />
  );
};

export default TextareaWidget;
