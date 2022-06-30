import React, { useEffect, useState } from 'react'; /* react hooks */
import './App.css';
import Event from './components/Event';
import { Grid } from '@material-ui/core'

function App() {

  const [ eventsList, setEventsList] = useState([]);
  
  useEffect(() =>{

    let eventsCollection = require('./assets/evanemang');
    setEventsList(eventsCollection);
  });
  
  return (
    <div className="App">  
        <Grid container spacing={2}>
            <Grid item xs={1} sm={3}></Grid>
            <Grid item xs={10} sm={6}>
                <Grid item container direction="column" spacing={10}  style={{ backgroundColor:'rgb(34, 32, 66)'}}>
                  <Grid item container alignContent='center'>
                    <span style={{ 
                      fontWeight:'600', 
                      fontSize:'40px', 
                      textAlign:'center',
                      paddingTop:'80px',
                      fontStyle: 'italic',
                      color:'rgb(244,108,153)', 
                      fontFamily:'Sansita'}}>Events</span>
                  </Grid>
                  <Grid item>
                    {
                      eventsList.map((event, index) => 
                        <Event singleEvent={event} key={index} />
                      )
                    }
                  </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1} sm={3}></Grid>
        </Grid>
    </div>
  );
}

export default App;