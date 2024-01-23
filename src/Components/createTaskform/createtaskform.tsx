import React, { FC, ReactElement, useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Title } from './__title';
import { Description } from './__description';
import { Datefield } from './_date';
import { SelectField } from './__selectField';
import { Status } from './enums/status';
import { Priority } from './enums/priority';
import { Alert, AlertTitle, LinearProgress, Button,} from '@mui/material';
import { SendApiRequest } from '../../helpers/sendAPIRequest';
import { ICreateTask } from '../taskArea/interfaces/ICreatetask';
import { useMutation } from '@tanstack/react-query';
import { useEffect,useContext } from 'react';
import { TaskStatusChangeContext } from '../../context';


export const CreateTaskform: FC = (): ReactElement => {
  //Declare Components State
  const [title, setTitle] = useState<string | undefined>(
    undefined,
  );
  const [description, setDescription] = useState<
    string | undefined
  >(undefined);
  const [date, setDatefield] = useState<Date | null>(
    new Date(),
  );
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(
    Priority.normal,
  );

  
  //Success Message State
  const [showSuccess , setshowSuccess] = useState<boolean>(false);
  
  //Create Context State
  const TaskUpdatedContext = useContext(TaskStatusChangeContext,);
  
  // Create task Mutation
  const CreateTaskMutation = useMutation( {
    mutationFn:(data: ICreateTask) =>
      SendApiRequest(
        'https://todotypescript.onrender.com/task',
        'POST',
        data,
      ),
    }
  );

  //Create A Function for Mutation
  function CreateTaskHandler() {
    if (!title || !date || !description){
      return ; 
    }
    
    
  //Create a TaskEntity Object
  const Task : ICreateTask = {
    Title:title,
    Description:description,
    Date:date.toString(),
    Status:status,
    Priority:priority
  };
  CreateTaskMutation.mutate(Task);
}

// Side Effects
useEffect(() => {//react
  if(CreateTaskMutation.isSuccess)
  {
    setshowSuccess(true);
    TaskUpdatedContext.toggle();
  }
  const SuccessTimeout = setTimeout( () => {setshowSuccess(false)},7000);
  return () => {
    clearTimeout(SuccessTimeout)
  };
},[CreateTaskMutation.isSuccess]);
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
      marginTop={2}
      marginBottom={2}
    >
      {showSuccess && <Alert
        severity="success"
        sx={{ width: '100%', marginBottom: '16px' }}
      >
        <AlertTitle>Success</AlertTitle>
        The Task has been Created Successfully.
      </Alert>}
      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Title onChange={(e) => setTitle(e.target.value)} disabled = {CreateTaskMutation.isPending} />
        <Description
          onChange={(e) => setDescription(e.target.value)} disabled = {CreateTaskMutation.isPending}
        />
        <Datefield
          value={date}
          onChange={(date) => setDatefield(date)}
          disabled = {CreateTaskMutation.isPending}
        />
        <Stack
          sx={{ width: '100%' }}
          direction={'row'}
          spacing={2}
        >
          <SelectField
            label="Status"
            name="status"
            items={[
              { value: Status.todo, label: Status.todo },
              {
                value: Status.inprogress,
                label: Status.inprogress,
              },
            ]}
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as string)
            }
            disabled = {CreateTaskMutation.isPending}
          />
          <SelectField
            label="Prioroty"
            name="priority"
            items={[
              {
                value: Priority.high,
                label: Priority.high,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              { value: Priority.low, label: Priority.low },
            ]}
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as string)
            }
            disabled = {CreateTaskMutation.isPending}
          />
        </Stack>
        {CreateTaskMutation.isPending && <LinearProgress />}
        <Button variant="contained" size="large" fullWidth onClick={CreateTaskHandler} disabled={
          !title || !description || !date || !status || !priority
        }>
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
