import React, { FC, ReactElement } from 'react';
import { Grid, LinearProgress } from '@mui/material';
import { Box } from '@mui/material';
import format from 'date-fns/format';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../TaskComponents/task';
import { useQuery } from '@tanstack/react-query';
import { SendApiRequest } from '../../helpers/sendAPIRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { Alert } from '@mui/material';
import { Status } from '../createTaskform/enums/status';
import { useMutation } from '@tanstack/react-query';
import { IUpdateTask } from './interfaces/IUpdateTask';
import { CountTasks } from './helpers/countTasks';
import { useContext, useEffect } from 'react';
import { TaskStatusChangeContext } from '../../context';

export const TaskArea: FC = (): ReactElement => {
  //Create Update TaskArea thorugh Context
  const TaskUpdatedContext = useContext(
    TaskStatusChangeContext,
  );

  const { error, isPending, data, refetch } = useQuery({
    queryKey: ['task'],
    queryFn: async () => {
      return await SendApiRequest<ITaskApi[]>(
        'https://todotypescript.onrender.com/task',
        'GET',
      );
    },
  });

  //Update Task Mutation
  const updateTaskMutation = useMutation({
    mutationFn: (data: IUpdateTask) =>
      SendApiRequest(
        'https://todotypescript.onrender.com/task',
        'PUT',
        data,
      ),
  });
  useEffect(() => {
    refetch();
  }, [TaskUpdatedContext.Updated]);
  useEffect(() => {
    if (updateTaskMutation.isSuccess) {
      TaskUpdatedContext.toggle();
    }
  }, [updateTaskMutation.isSuccess]);

  //Create Function to work with Switch and its Mutation
  function OnStatusChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      Status: e.target.checked
        ? Status.inprogress
        : Status.todo,
    });
  }

  //Create Function for Mark Complete Button
  function MarkCompleteButtonHandler(
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      Status: Status.completed,
    });
  }

  return (
    <Grid item md={8} px={4}>
      <Box mb={8}>
        <h3>
          Status of Your tasks As on{' '}
          {format(new Date(), 'PPPP')}
        </h3>
      </Box>
      <Grid
        container
        display={'flex'}
        justifyContent={'center'}
      >
        <Grid
          item
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-around'}
          alignItems={'center'}
          md={30}
          xs={12}
          mb={8}
        >
          <TaskCounter
            status={Status.todo} 
            count={
              data
                ? CountTasks(data, Status.todo)
                : undefined
            }
          />
          <TaskCounter
            status={Status.inprogress}
            count={
              data
                ? CountTasks(data, Status.inprogress)
                : undefined
            }
          />
          <TaskCounter
            status={Status.completed}
            count={
              data
                ? CountTasks(data, Status.completed)
                : undefined
            }
          />
        </Grid>
        <Grid
          item
          display={'flex'}
          flexDirection={'column'}
          md={10}
          xs={10}
        >
          <>
            {error && ( // When not able to Fetch Tasks from Api
              <Alert severity="error">
                There is an Error Fetching Your Tasks.
              </Alert>
            )}

            {!error &&
              Array.isArray(data) &&
              data.length === 0 && (
                <Alert severity="warning">
                  There is No Task in Database,Start
                  Creating Some Task.
                </Alert>
              )}

            {isPending ? (
              <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((each, index) => {
                return each.Status === Status.todo ||
                  each.Status === Status.inprogress ? (
                  <Task
                    key={index.toString()}
                    id={each.id}
                    title={each.Title}
                    description={each.Description}
                    date={new Date(each.Date)}
                    priority={each.Priority}
                    status={each.Status}
                    onStatusChange={OnStatusChangeHandler}
                    onClick={MarkCompleteButtonHandler}
                  />
                ) : (
                  false
                );
              })
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
