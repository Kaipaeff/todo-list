import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import { ILinearProgressBarProps } from '../../types/Interfaces';

function LinearProgressBar({ todo = [] }: ILinearProgressBarProps) {
  function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    const progressColor = props.value >= 50 ? 'success' : props.value < 30 ? 'error' : 'warning';

    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 1 }}>
          <Typography variant="subtitle1" color="text.secondary">{`Выполнено:`}</Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 2 }}>
          <LinearProgress
            variant="determinate"
            {...props}
            color={progressColor}
            sx={{ height: '10px', borderRadius: '10px' }}
          />
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {`${props.value}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  const totalCount = todo.length;
  const completedCount = todo.filter(el => el.completed).length;
  const progress = parseFloat(((completedCount / totalCount) * 100).toFixed(2));

  return (
    <Box sx={{ width: '70%', mr: 'auto', alignSelf: 'center', pt: '3px' }}>
      <LinearProgressWithLabel value={progress ? progress : 0} color="primary" />
    </Box>
  );
}

export default LinearProgressBar;
