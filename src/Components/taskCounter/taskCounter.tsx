import React,{FC,ReactElement} from "react";
import { Avatar,Box,Typography } from "@mui/material";
import { Status } from "../createTaskform/enums/status";
import { ITaskCounter } from "./Interfaces/ItaskCounter";
import { EmitCorrectBorderColor } from "./helpers/emitCorrectbordercolor";
import { EmitCorrectLabel } from "./helpers/emitCorrectLabel";
import  PropTypes  from "prop-types";


export const TaskCounter:FC<ITaskCounter> = (props,):ReactElement => {
    const {count=0 , status=Status.completed} = props;
    return (
        <>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Avatar sx={{ backgroundColor: 'transparent', border:'5px solid',width:'96px',height:'96px',marginBottom:'16px',borderColor:`${EmitCorrectBorderColor(status)}`}}>
                    <Typography color={'#ffffff'} variant="h4">
                        {count}
                    </Typography>
                </Avatar>
                <Typography color={'#ffffff'} fontWeight={'bold'} fontSize={'20px'} variant="h5">
                    {EmitCorrectLabel(status)}
                </Typography>
            </Box>
        </>
    );
};

TaskCounter.propTypes = {
    count: PropTypes.number,
    status: PropTypes.oneOf([Status.todo,Status.inprogress,Status.completed]),
};