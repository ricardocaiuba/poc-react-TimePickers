import React from 'react';
import TimePickers from './component/TimePickers';
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <div>
      <Grid container spacing={20}>
        <TimePickers
          label="Entrada"
          defaultValue="08:00" />
        <TimePickers
          label="Saída"
          defaultValue="17:30" />
      </Grid>
    </div>
  );
}

export default App;
