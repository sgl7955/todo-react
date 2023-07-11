import {
  Box,
  Grid,
  Alert,
  LinearProgress,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../task/task';

import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useQuery } from 'react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';

export const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data, refetch } = useQuery(
    'tasks',
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET',
      );
    },
  );

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          당신의 작업 목록 :{' '}
          {format(new Date(), 'PPPP', { locale: ko })}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={10}
          md={8}
        >
          <>
            {error && (
              <Alert severity="error">
                data를 fetch 중 error가 있습니다
              </Alert>
            )}

            {!error &&
              Array.isArray(data) &&
              data.length === 0 && (
                <Alert severity="warning">
                  아직 어떤 작업도 있지 않습니다. 작업을
                  추가하세요!
                </Alert>
              )}
            <Task id="123" />
            <Task id="123" />
            <Task id="123" />
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};
