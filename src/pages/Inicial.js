import React, { useState, useEffect } from "react";
import Header from "../components/framework/Header";
import UserCard from "../components/dashboard/cards/UserCard";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
import PolarAreaChart from "../components/charts/PolarAreaChart";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';


// MaterialUI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(16),
  },
  titulo2: {
    marginBottom: theme.spacing(2),
  },
  linha1: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    padding: 30,
  },
  noResults: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: "center",
    padding: 12,
  },
  user: {
    padding: 10,
  }
}));

export const PlanoEstudo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container className={classes.container} >
        <Grid container spacing={3} className={classes.linha1}>
          <Grid item xs={3}>
            <Paper className={classes.user}>
              <UserCard/>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.noResults}>
              <h2>Seus resultados</h2>
              <SentimentVeryDissatisfiedIcon style={{ fontSize: 100 }} />
              <h3>Que pena. Não há nenhum resultado, que tal fazer o Teste de Nivelamento?</h3>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
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