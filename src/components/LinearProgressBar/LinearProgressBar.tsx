import { memo, useEffect, useState } from 'react';
import { LinearProgress, LinearProgressProps, Box, Typography } from '@mui/material';

import { getCompletedTaskValue } from '../../utilities/getCompletedTaskValue';
import { ILinearProgressBarProps } from '../../types/Interfaces';

function LinearProgressBar({ todo = [] }: ILinearProgressBarProps) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const cachedProgress = localStorage.getItem('progress');
    if (cachedProgress !== null) {
      setProgress(parseFloat(cachedProgress));
    }
  }, []);

  useEffect(() => {
    if (todo.length) {
      const completedValue = getCompletedTaskValue(todo);
      setProgress(completedValue);
      localStorage.setItem('progress', completedValue.toString());
    }
  }, [todo]);

  function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    const progressColor =
      props.value >= 50 ? 'success' : props.value === 0 ? 'inherit' : props.value < 30 ? 'error' : 'warning';

    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            mr: 1,
            '@media (max-width: 640px)': {
              display: 'none',
            },
          }}
        >
          <Typography variant="subtitle1" color="text.secondary">{`Выполнено:`}</Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            mr: 2,
            '@media (max-width: 640px)': {
              width: '90px',
              marginRight: '8px',
            },
          }}
        >
          <LinearProgress
            variant="determinate"
            {...props}
            color={progressColor}
            sx={{ height: '10px', borderRadius: '10px' }}
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary" sx={{ width: '52px' }}>
            {`${props.value}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '300px',
        alignSelf: 'center',
        pt: '3px',
        '@media (max-width: 640px)': {
          width: '100%',
        },
      }}
    >
      {<LinearProgressWithLabel value={progress} color="primary" />}
    </Box>
  );
}

export default memo(LinearProgressBar);
