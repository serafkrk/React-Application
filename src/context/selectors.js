/**
 * Function which returns visible rooms based on filters.
 * As a first parameter it gets array of buildings, as a second filters, which are destructurized (less typing, more clarity)
 */
export function getVisibleRooms(buildings, { search, floorIds, buildingIds }) {
  /**
   * We modify each room, adding to it floorId, buildingId, floorName, buildingName.
   * The floorId and buildingId is added for the filtering purposes.
   * The floorName and buildingName is added for the display purposes, as it's displayed in room card component.
   * It is 3-level tree, so we need to flat it 2 times.
   */
  const rooms = buildings
    .map((building) =>
      building.floors.map((floor) =>
        floor.rooms.map((room) => ({
          ...room,
          floorId: floor.id,
          buildingId: building.id,
          floorName: floor.name,
          buildingName: building.name,
        }))
      )
    )
    .flat()
    .flat()
    .filter((room) => {
      /**
       * If any of the filters is not specified the true is always returned.
       * In other case we check for exaple if the search phrase matches with the room name
       */
      const searchMatch =
        search !== null ? room.filterText.toLowerCase().includes(search.toLowerCase()) : true;
      const floorMatch = floorIds.length ? floorIds.includes(room.floorId) : true;
      const buildingMatch = buildingIds.length ? buildingIds.includes(room.buildingId) : true;

      /**
       * If it returns true we add it to new array, else we omit it.
       */
      return searchMatch && floorMatch && buildingMatch;
    });

  return rooms;
}
