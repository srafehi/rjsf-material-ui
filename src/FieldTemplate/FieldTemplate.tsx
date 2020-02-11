import React from 'react';

import { FieldTemplateProps } from 'react-jsonschema-form';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

const FieldTemplate = ({
  id,
  children,
  displayLabel,
  rawErrors = [],
  rawHelp,
  rawDescription,
}: FieldTemplateProps) => {
  return (
    <FormControl fullWidth={true} error={!!rawErrors.length}>
      {children}
      {displayLabel && rawDescription ? (
        <Typography variant="caption" color="textSecondary">
          {rawDescription}
        </Typography>
      ) : null}
      {rawErrors.length > 0 && (
        <Box mt={1} mb={1}>
          <Alert severity="error">
            {rawErrors.map((err: string, idx: number) => (
              <Box key={idx}>{err}</Box>
            ))}
          </Alert>
        </Box>
      )}
      {rawHelp && <FormHelperText id={id}>{rawHelp}</FormHelperText>}
    </FormControl>
  );
};

export default FieldTemplate;
