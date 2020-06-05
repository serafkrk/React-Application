import React, { useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import RoomItem from './RoomItem';
import { BuildingContext } from '../context/BuildingContext';
import { getVisibleRooms } from '../context/selectors';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  })
);

/**
 * Component which renders the list of rooms, it gets the data from context, and uses getVisibleRooms selector to render correct rooms considering the filters.
 */
function RoomsList() {
  /**
   * useContext is built-in react hook, it returns an object specified in provider. In this case it's object with state and dispatch.
   */
  const { state } = useContext(BuildingContext);
  const classes = useStyles();

  /**
   * Returns the rooms, it gets all buildings as a first parameter and filters as a second one.
   */
  const rooms = getVisibleRooms(state.buildings, state.filters);

  /**
   * Uses material ui core grid system to display rooms in grid.
   */
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {rooms.map((room) => (
          <Grid key={room.id} item xs={12} md={4}>
            <RoomItem room={room} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default RoomsList;
