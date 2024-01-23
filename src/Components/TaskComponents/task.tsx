import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './__taskheader';
import { TaskDescription } from './__taskdescription';
import { TaskFooter } from './__taskfooter';
import { ITask } from './interfaces/ITask';
import { Priority } from '../createTaskform/enums/priority';
import { Status } from '../createTaskform/enums/status';
import PropTypes from 'prop-types';
import { PriorityBorderColor } from './helpers/PriorityBorderColor';


export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test Title',
    date = new Date(),// due to some reasons when date passed in taskheader is gives Runtime error 'Invalid time value'
    description = 'Description Not Added',
    priority = Priority.normal,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
    id,
  } = props;
  return (
    <Box
      display={'flex'}
      width={'100%'}
      justifyContent={'flex-start'}
      flexDirection={'column'}
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'Background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: PriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} /> 
      <TaskDescription description={description} />
      <TaskFooter
        onClick={onClick}
        onStatusChange={onStatusChange}
        id={id}
        status={status}
      />
    </Box>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};
