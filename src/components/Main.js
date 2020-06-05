import React from 'react';

import Search from './Search';
import RoomsList from './RoomsList';

/**
 * Right side of the main page, renders Search and RoomsList components
 */
function Main() {
  return (
    <div>
      <Search />
      <RoomsList />
    </div>
  );
}

export default Main;
