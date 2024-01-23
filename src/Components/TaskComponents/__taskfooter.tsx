import React,{FC,ReactElement} from "react";
import { Box,FormControlLabel,Switch } from "@mui/material";
import {Button} from "@mui/material";
import { ItaskFooter } from "./interfaces/ITaskFooter";
import PropTypes from "prop-types"
import { Status } from "../createTaskform/enums/status";


export const TaskFooter:FC<ItaskFooter> =(props,): ReactElement => {
    
    const {id,status, onStatusChange= (e) => console.log(e),onClick=(e)=>console.log(e) }=props;
    return (
        <>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={4}>
                <FormControlLabel label='InProgress' control={<Switch defaultChecked = {status === Status.inprogress} onChange={(e)=>onStatusChange(e,id)} color="warning"  />} />
                <Button variant="contained" color="success" size="small" sx={{color:'#ffffff'}} onClick={(e) => onClick(e,id)}>Mark Complete</Button>
            </Box>
        </>
    );
};

TaskFooter.propTypes = {
    onStatusChange: PropTypes.func,
    onClick:PropTypes.func,
    id: PropTypes.string.isRequired,
    status:PropTypes.string
}
