import { useState } from 'react';

import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';

function LinearProgressBar() {
  const [progress, setProgress] = useState(90);

  function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 1 }}>
          <Typography variant="subtitle1" color="text.secondary">{`Выполнено:`}</Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 2 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="subtitle2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '30%', margin: '0 auto' }}>
      <LinearProgressWithLabel value={progress} color="primary" />
    </Box>
  );
}

export default LinearProgressBar;
