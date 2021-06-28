import React, { useState, useEffect } from "react";
import Header from "../components/framework/Header";
import BlueCard from "../components/dashboard/cards/BlueCard";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
import PolarAreaChart from "../components/charts/PolarAreaChart";
import Grid from "@material-ui/core/Grid";

// MaterialUI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";



const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(16),
  },
  titulo2: {
    marginBottom: theme.spacing(2),
  },
  linha1: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "row",
  },
  paper: {
    padding: 30,
  },
}));

export const PlanoEstudo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container className={classes.container} >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BlueCard />
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <PieChart />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <BarChart />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <PolarAreaChart />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Sua evolução</h2>
              <LineChart />
            </Paper>
          </Grid>
        </Grid>

       
      </Container>
    </React.Fragment>
  );
};

export default PlanoEstudo;