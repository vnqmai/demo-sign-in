import React from 'react';
import {
  Box,
  InputLabel,
  TextField
} from '@mui/material';

function DemoSignInInput(props) {
  const {
    inputLabel = '',
    ...rest
  } = props;
  return (
    <Box>
        <InputLabel>{inputLabel}</InputLabel>
        <TextField
          { ...rest }
        />
    </Box>
  );
}

export default DemoSignInInput;