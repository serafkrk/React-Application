import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

/**
 * Main view, it breaks the page to 2 parts, sidebar and main items.
 */
function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Main />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
