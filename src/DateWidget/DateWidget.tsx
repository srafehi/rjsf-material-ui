import React from 'react';

import { WidgetProps } from 'react-jsonschema-form';
import BaseDateWidget from '../BaseDateWidget/BaseDateWidget';

const DateWidget = (widgetProps: WidgetProps) => (
  <BaseDateWidget
    type="date"
    format="MMMM do, yyyy"
    widgetProps={widgetProps}
    dateFormatter={(date: Date) => date.toISOString()}
  />
);

export default DateWidget;
