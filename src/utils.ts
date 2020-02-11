import { isObject } from 'react-jsonschema-form/lib/utils';
import { WidgetProps } from 'react-jsonschema-form';

export interface MuiInputProps
  extends Pick<
    React.HTMLAttributes<HTMLElement>,
    'onBlur' | 'onFocus' | 'onChange' | 'placeholder'
  > {
  id: string;
  error: boolean;
  label?: string;
  value: any;
  required: boolean;
  disabled: boolean;
  autoFocus: boolean;
}

interface ExtendedWidgetProps extends WidgetProps {
  rawErrors?: string[];
}

interface GetMuiInputProps {
  widgetProps: ExtendedWidgetProps;
  valueCleanser?: (value: any) => any;
}

interface MuiOptionsContainer {
  muiOptions?: { [key: string]: any };
}

export interface Enum {
  label: any;
  value: any;
  disabled: boolean;
  key: string;
}

export function getMuiOptions({
  muiOptions,
}: MuiOptionsContainer): { [key: string]: any } {
  return muiOptions !== undefined && isObject(muiOptions) ? muiOptions : {};
}

export function getMuiInputOptions({
  widgetProps,
  valueCleanser,
}: GetMuiInputProps): MuiInputProps {
  return {
    id: widgetProps.id,
    error: widgetProps.rawErrors ? widgetProps.rawErrors.length > 0 : false,
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

export function getEnums(enumOptions: any[], enumDisabled: any[]): Enum[] {
  return (enumOptions as any).map(({ value, label }: any, index: number) => {
    const disabled: boolean =
      enumDisabled && (enumDisabled as any).indexOf(value) != -1;
    return { value, label, disabled, key: `${index}_${value}` };
  });
}
