import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextfield } from './interfaces/Itextfield';
import  PropTypes  from 'prop-types';

export const Title: FC<ITextfield> = (props,): ReactElement => {
    const {disabled = false, onChange= (e) => console.log(e)}=props; // default values
  return (
    <TextField
      id="title"
      name="title"
      label="Task Title"
      placeholder="Task title"
      variant="outlined"
      size="small"
      disabled={disabled}
      onChange={onChange}
      fullWidth
    />
  );
};

Title.propTypes={
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};


