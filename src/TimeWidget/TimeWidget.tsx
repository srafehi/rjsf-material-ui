import React from 'react';

import { WidgetProps } from 'react-jsonschema-form';
import BaseDateWidget from '../BaseDateWidget/BaseDateWidget';

const TimeWidget = (widgetProps: WidgetProps) => (
  <BaseDateWidget
    type="time"
    format="hh:mm:ss a"
    widgetProps={widgetProps}
    dateFormatter={(date: Date) => date.toISOString()}
  />
);

export default TimeWidget;
