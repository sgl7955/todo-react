import { Box, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskTitleField } from './_taskTitleField';
import { TaskDateField } from './_taskDateField';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        작업 만들기
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
      </Stack>

      {/*Task Date*/}
      {/*Task Status*/}
      {/*Task Priority*/}
    </Box>
  );
};
