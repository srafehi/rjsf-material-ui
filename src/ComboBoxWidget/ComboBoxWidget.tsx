import React from 'react';

import Autocomplete from '@material-ui/lab/Autocomplete';
import { getMuiOptions, getMuiInputOptions, getEnums, Enum } from '../utils';
import { TextField } from '@material-ui/core';
import { WidgetProps } from 'react-jsonschema-form';

type ExtendedWidgetProps = WidgetProps & {
  options: any;
  multiple: any;
};

const ComboBoxWidget = (widgetProps: ExtendedWidgetProps) => {
  const enumOptions = getEnums(
    widgetProps.options.enumOptions,
    widgetProps.options.enumDisabled
  );

  const emptyValue = widgetProps.multiple ? [] : null;
  const multiple = widgetProps.multiple || false;

  const inputOptions = getMuiInputOptions({
    widgetProps,
    valueCleanser: selection => {
      // cleanse selection + convert to Set
      selection = typeof selection === 'undefined' ? emptyValue : selection;
      if (!Array.isArray(selection)) {
        selection = [selection];
      }
      const selectionSet = new Set(selection);

      // find the options for all selections
      const selectedOptions: Enum[] = enumOptions.filter(enumOption =>
        selectionSet.has(enumOption.value)
      );

      // return the correct value
      return multiple ? selectedOptions : selectedOptions[0] || null;
    },
  });

  const muiOnChange = (_: any, option: Enum | Enum[]) => {
    let value;
    if (Array.isArray(option)) {
      value = option.length ? option.map(opt => opt.value) : undefined;
    } else {
      value = option ? option.value : undefined;
    }
    widgetProps.onChange(value);
  };

  return (
    <Autocomplete
      id={inputOptions.id}
      options={enumOptions}
      autoHighlight
      clearOnEscape
      multiple={multiple}
      value={inputOptions.value}
      disabled={inputOptions.disabled}
      getOptionLabel={option => option.label}
      getOptionDisabled={option => option.disabled}
      renderInput={params => (
        <TextField
          {...params}
          fullWidth={true}
          label={inputOptions.label}
          placeholder={inputOptions.placeholder}
          required={inputOptions.required}
          autoFocus={inputOptions.autoFocus}
          {...getMuiOptions(widgetProps.options)}
        />
      )}
      onChange={muiOnChange}
      onBlur={inputOptions.onBlur}
      onFocus={inputOptions.onFocus}
    />
  );
};

export default ComboBoxWidget;
