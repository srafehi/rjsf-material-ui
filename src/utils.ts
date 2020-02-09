import { isObject } from 'react-jsonschema-form/lib/utils';
import { WidgetProps } from 'react-jsonschema-form';
import * as React from '@types/react';

export interface MuiInputProps
  extends Pick<
    React.HTMLAttributes<HTMLElement>,
    'onBlur' | 'onFocus' | 'onChange' | 'placeholder'
  > {
  id: string;
  label?: string;
  value: any;
  required: boolean;
  disabled: boolean;
  autoFocus: boolean;
}

interface GetMuiInputProps {
  widgetProps: WidgetProps;
  valueCleanser?: (value: any) => any;
}

interface MuiOptionsContainer {
  muiOptions?: object;
}

export function getMuiOptions({ muiOptions }: MuiOptionsContainer) {
  return isObject(muiOptions)
    ? muiOptions
    : {
        variant: 'outlined',
        size: 'small',
        margin: 'dense',
      };
}

export function getMuiInputOptions({
  widgetProps,
  valueCleanser,
}: GetMuiInputProps): MuiInputProps {
  return {
    id: widgetProps.id,
    label: widgetProps.label || widgetProps.schema.title,
    placeholder: widgetProps.placeholder,
    autoFocus: widgetProps.autofocus || false,
    required: widgetProps.required,
    disabled: widgetProps.disabled || widgetProps.readonly,
    value: valueCleanser ? valueCleanser(widgetProps.value) : widgetProps.value,
    onBlur: ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
      widgetProps.onBlur(widgetProps.id, value),
    onFocus: ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
      widgetProps.onFocus(widgetProps.id, value),
    onChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
      widgetProps.onChange(
        value === '' ? widgetProps.options.emptyValue : value
      ),
  };
}
