import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { BuildingContext } from '../context/BuildingContext';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    marginBottom: 40,
  },
  input: {
    marginRight: 20,
  },
}));

/**
 * Search component which is on top of the site, it's input with the button, which dispatch actions to context.
 */
function Search() {
  const classes = useStyles();
  /**
   * Getting the dispatch function from the context.
   */
  const { dispatch } = useContext(BuildingContext);
  /**
   * Using the built-in React hook, it returns the 2 element array which I destructurize, first element is the string, second is the function which updates the search value.
   */
  const [searchValue, setSearchValue] = useState('');

  /**
   * Change handler on input component, when user types anything the state is updated.
   */
  function handleSearchChange(e) {
    /**
     * Updating the state using the function returned from useState.
     */
    setSearchValue(e.target.value);
  }

  /**
   * Submit handler form form, it's better than having the handler on button, because now the form will be submitted after we click enter on keyboard.
   */
  function handleSubmit(e) {
    /**
     * Preventing the default behaviors (refreshing the website).
     */
    e.preventDefault();

    /**
     * Dispatching action to context, it's global state, which has the search term.
     */
    dispatch({ type: 'SET_SEARCH', payload: searchValue });
  }

  return (
    <form onSubmit={handleSubmit} className={classes.wrapper}>
      <TextField
        className={classes.input}
        value={searchValue}
        onChange={handleSearchChange}
        variant="outlined"
        placeholder="Enter room number"
        type="text"
      />
      <Button type="submit" variant="contained" color="primary">
        Go
      </Button>
    </form>
  );
}

export default Search;
