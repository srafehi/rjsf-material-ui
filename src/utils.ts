import { isObject } from 'react-jsonschema-form/lib/utils';

interface MuiOptionsContainer {
  muiOptions?: object;
}

export function getMuiOptions({ muiOptions }: MuiOptionsContainer) {
  return isObject(muiOptions) ? muiOptions : {};
}
