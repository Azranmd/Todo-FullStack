import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextfield } from './interfaces/Itextfield';
import PropTypes  from 'prop-types';
export const Description: FC<ITextfield> = (props,): ReactElement => {
    const {disabled = false, onChange = (e) => console.log(e)}= props;
  return (
    <TextField
      id="description"
      name="description"
      label="Task Description"
      placeholder="Task description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      disabled={disabled}
      onChange={onChange}
      fullWidth
    />
  );
};

Description.propTypes ={
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
};
