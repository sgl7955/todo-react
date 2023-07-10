import { Box, Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { TaskCounter } from '../taskCounter/taskCounter';

import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          당신의 작업 목록 : {' '}
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
          <Box>Tasks Will Come Over Here</Box>
          <Box>Tasks Will Come Over Here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
