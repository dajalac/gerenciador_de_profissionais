import React from 'react';
// import { Grid } from '@material-ui/core';
import Card from '../components/Cards/card';
import './Home.css'



function Home() {
    
  return (
    <div className =" home-screen">
       <div className ="home-screen-items">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        </div>

    
  );
}

export default Home;

/*
<div className =" home-screen">
        <div className ="home-screen-items">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
    </div>

< Grid container spacing={0}
    direction="column"
    alignItems="center"
    align = "center"
    justify="center">
    <Grid container spacing={3} >
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={4}>
          <Card/>
      </Grid>
      <Grid item xs={12} sm={4}>
          <Card/>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
    <Grid container spacing={3} >
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={4}>
          <Card/>
      </Grid>
      <Grid item xs={12} sm={4}>
          <Card/>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
    </Grid>
*/