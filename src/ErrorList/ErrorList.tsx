import React from 'react';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { ErrorListProps } from 'react-jsonschema-form';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

const ErrorList = ({ errors }: ErrorListProps) => (
  <Alert severity="error">
    <AlertTitle>Errors</AlertTitle>
    <Box>
      <List dense={true}>
        {errors.map((error, i: number) => {
          return (
            <ListItem key={i}>
              <ListItemText primary={error.stack} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  </Alert>
);

export default ErrorList;
