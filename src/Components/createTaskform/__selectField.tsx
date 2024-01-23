import React, { FC, ReactElement } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, {
  SelectChangeEvent,
} from '@mui/material/Select';
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types';

export const SelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  const {
    value = '',
    label = 'Select Box',
    name = 'selectBox',
    items = [{ value: '', label: 'Add items' }],
    disabled = false,
    onChange = (e: SelectChangeEvent,) => {(e.target.value as string),console.log(e,e.target.value as string)},
  } = props;




  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
        
      >
        {items.map((item, index) => (
          <MenuItem
            key={item.value + index}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
