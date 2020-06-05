import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Function provided by the material ui-core which allows to make hook for creating custom styles.
 */
const useStyles = makeStyles(() => ({
  wrapper: {
    marginBottom: 10,
  },
  input: {
    visibility: 'hidden',
    display: 'none',
    '&:checked + label': {
      border: '1px solid #96004b33',
      backgroundColor: '#f7dbe3',
      color: '#96004b',
    },
  },
  label: {
    boxSizing: 'border-box',
    cursor: 'pointer',
    width: '100%',
    display: 'block',
    textAlign: 'center',
    padding: '16px 20px',
    borderRadius: '5px',
    backgroundColor: '#edf1f7',
    border: '1px solid transparent',
    fontFamily: 'Roboto',
  },
}));

/**
 * Component which receives props such as onChange, checked, value, id from the Sidebar Component, as children input's label is passed.
 */
function Checkbox({ children, id, onChange, value, checked }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <input
        checked={checked}
        value={value}
        name="floor"
        onChange={onChange}
        id={id}
        type="checkbox"
        className={classes.input}
      />
      <label htmlFor={id} className={classes.label}>
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
