import React,{FC,ReactElement} from "react";
import { Box,Chip,Typography } from "@mui/material";
import { ITaskHeader } from "./interfaces/ItaskHeader";
import { format } from "date-fns";
import Proptypes from "prop-types";



export const TaskHeader:FC<ITaskHeader> = (props,):ReactElement => {
    const { title = 'Default Title', date = new Date()}=props;
    
    return(
        <>
            <Box display={'flex'} width={'100%'} justifyContent={'space-between'} mb={2}>
                <Box>
                    <Typography variant="h6">{title}</Typography>
                </Box>
                <Box>
                    <Chip variant="outlined" label={format(date,'PPP')}/>
                </Box>
            </Box>
        </>
    );
};

TaskHeader.propTypes = {
    title:Proptypes.string,
    date: Proptypes.instanceOf(Date),
};