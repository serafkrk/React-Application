import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import CustomCheckbox from './Checkbox';
import { BuildingContext } from '../context/BuildingContext';

/**
 * Component which is responsible for almost the entire logic in the application.
 * It returns all the checkboxes. Has change handlers for them.
 */
function Sidebar() {
  /**
   * Get all the buildings and filters from the global state and dispatch, to have ability to change the state.
   */
  const {
    state: { buildings, filters },
    dispatch,
  } = useContext(BuildingContext);

  /**
   * Change handler which is triggered when the building is selected or unselected.
   */
  function handleBuildingChange(e) {
    /**
     * Destructuring the e.target object and getting the value and info if it's checked or not.
     */
    const { checked, value } = e.target;

    /**
     * If the building is checked we dispatch an action which add another building to global state, if not we remove it.
     */
    if (checked) {
      dispatch({ type: 'SET_BUILDING_ID', payload: value });
    } else {
      dispatch({ type: 'REMOVE_BUILDING_ID', payload: value });
    }
  }

  /**
   * Basically the same logic as in handleBuildingChange, but here in addition when we select the floor we also want to check the building.
   */
  function handleFloorChange(e, buildingId) {
    const { value, checked } = e.target;

    /**
     * Setting or removing the floor id in the global state.
     */
    if (checked) {
      dispatch({ type: 'SET_FLOOR_ID', payload: value });
      /**
       * Based on the fromFloor flag I know in context's reducer that the change comes from the handleFloorChange, not the handleBuildingChange
       */
      dispatch({ type: 'SET_BUILDING_ID', payload: { id: buildingId, fromFloor: true } });
    } else {
      dispatch({ type: 'REMOVE_FLOOR_ID', payload: { floorId: value, buildingId } });
    }
  }

  return (
    <div>
      <Typography variant="h4" component="h2">
        Select building and floor
      </Typography>
      {buildings.map((building) => (
        <div key={building.id}>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.buildingIds.includes(building.id)}
                value={building.id}
                onChange={handleBuildingChange}
                name="building"
                color="primary"
              />
            }
            label={building.name}
          />
          {building.floors.map((floor) => (
            <CustomCheckbox
              value={floor.id}
              onChange={(e) => handleFloorChange(e, building.id)}
              id={floor.id}
              key={floor.id}
              checked={filters.floorIds.includes(floor.id)}
            >
              {floor.name}
            </CustomCheckbox>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
