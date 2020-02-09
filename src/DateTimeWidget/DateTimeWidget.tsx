import React from 'react';

import { WidgetProps } from 'react-jsonschema-form';
import BaseDateWidget from '../BaseDateWidget/BaseDateWidget';

const DateTimeWidget = (widgetProps: WidgetProps) => (
  <BaseDateWidget
    type="date-time"
    format="hh:mm:ss a - MMMM do, yyyy"
    widgetProps={widgetProps}
    dateFormatter={(date: Date) => date.toISOString()}
  />
);

export default DateTimeWidget;
