import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ListItemStyles } from './ListItem.styles';

function ListItem() {
  return (
    <ListItemStyles>
      <Card sx={{ maxWidth: 1 }}>
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except
          </Typography>
        </CardContent>
      </Card>
    </ListItemStyles>
  );
}

export default ListItem;
