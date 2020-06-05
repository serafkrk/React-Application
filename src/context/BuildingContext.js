import React, { createContext, useReducer } from 'react';

import { initialState } from './initialState';

/**
 * Using built-in React function which creates Context. Then we can use the provider, to provide the data to all components using useContext hook.
 */
export const BuildingContext = createContext();

/**
 * Reducer function which takes 2 arguments, state and action.
 * Based on action.type we do some changes in the state.
 * We always return a new object as Context should be immutable.
 */
function reducer(state, action) {
  switch (action.type) {
    /**
     * Set new search phrase.
     */
    case 'SET_SEARCH':
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };

    /**
     * Set new floor id.
     */
    case 'SET_FLOOR_ID':
      return {
        ...state,
        filters: {
          ...state.filters,
          floorIds: [...state.filters.floorIds, action.payload],
        },
      };

    /**
     * Remove floor id
     */
    case 'REMOVE_FLOOR_ID':
      /**
       * newFloors is the array of new floorIds.
       * buildingFloors is the array of floors for given building.
       * hasAny is a boolean variable which returns true, if there's more than one active floor for given building, otherwise it returns false.
       */
      const buildingFloors = state.buildings
        .filter((building) => building.id === action.payload.buildingId)[0]
        .floors.map((floor) => floor.id);
      const newFloors = state.filters.floorIds.filter((id) => id !== action.payload.floorId);
      const hasAny = buildingFloors.some((floorId) => newFloors.includes(floorId));

      return {
        ...state,
        filters: {
          ...state.filters,
          floorIds: state.filters.floorIds.filter((id) => id !== action.payload.floorId),
          buildingIds: hasAny
            ? state.filters.buildingIds
            : state.filters.buildingIds.filter((id) => id !== action.payload.buildingId),
        },
      };

    /**
     * Set new building ID.
     */
    case 'SET_BUILDING_ID':
      /**
       * If the action comes from the handleFloorChange we only update the building ID.
       */
      if (action.payload.fromFloor) {
        return {
          ...state,
          filters: {
            ...state.filters,
            buildingIds: [...state.filters.buildingIds, action.payload.id],
          },
        };
      }

      /**
       * Otherwise we also select all the floors for given building.
       */
      const floorIds = state.buildings
        .filter((building) => building.id === action.payload)[0]
        .floors.map((floor) => floor.id);

      return {
        ...state,
        filters: {
          ...state.filters,
          buildingIds: [...state.filters.buildingIds, action.payload],
          floorIds: [...state.filters.floorIds, ...floorIds],
        },
      };

    /**
     * Removing the building ID.
     * When we remove the building from filters, we also want to remove all floors associated with it.
     */
    case 'REMOVE_BUILDING_ID':
      const floorIdsToRemove = state.buildings
        .filter((building) => building.id === action.payload)[0]
        .floors.map((floor) => floor.id);
      const newFloorIds = state.filters.floorIds.filter((el) => !floorIdsToRemove.includes(el));
      return {
        ...state,
        filters: {
          ...state.filters,
          buildingIds: state.filters.buildingIds.filter((id) => id !== action.payload),
          floorIds: newFloorIds,
        },
      };

    default:
      return state;
  }
}

/**
 * Provider which provides the state and dispatch function for components.
 * It wraps the entire application so each components can use it.
 */
function BuildingProvider({ children }) {
  /**
   * built-in React hook, which returns a 2 element array, state and dispatch
   */
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BuildingContext.Provider value={{ state, dispatch }}>{children}</BuildingContext.Provider>
  );
}

export default BuildingProvider;
