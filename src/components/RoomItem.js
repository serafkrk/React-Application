import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';

/**
 * Allows to create custom styles, part of material UI core.
 */
const useStyles = makeStyles({
  media: {
    height: 200,
  },
  chip: {
    marginRight: 16,
    marginBottom: 8,
  },
  link: {
    textDecoration: 'none',
  },
});

/**
 * Component which renders the single Room Item. It has the entire room object as a prop, it uses it to render the actual data. All Cards components come from material ui core
 */
function RoomItem({ room }) {
  /**
   * Custom hook which returns objects with CSS classes and styles.
   */
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.media} image={room.image} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {room.text} - {room.number}
          </Typography>
          <Chip color="primary" className={classes.chip} label={room.buildingName} />
          <Chip color="secondary" className={classes.chip} label={room.floorName} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a target="_blank" rel="noopener noreferrer" className={classes.link} href={room.link}>
          <Button size="small" variant="outlined" color="primary">
            Go
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default RoomItem;
