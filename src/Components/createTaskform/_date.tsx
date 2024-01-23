import React,{FC,ReactElement} from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box,  } from "@mui/material";
import { IDatefiled } from "./interfaces/IDatefiled";
import  PropTypes  from "prop-types";

export const Datefield: FC<IDatefiled> = (props,): ReactElement => {
  const {value= null,disabled=false, onChange=(Date)=>console.log(Date)}=props;
    return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box >
          <DatePicker 
            sx={{width:'100%'}}
            label="Task Due Date"
            onChange={onChange}
            value={value}
            disabled={disabled}
          />
        </Box>
      </LocalizationProvider>        
    </>
  );
};

Datefield.propTypes={
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value : PropTypes.instanceOf(Date)
};


