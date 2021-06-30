import React, { useState, useEffect } from "react";
import Header from "../components/framework/Header";
import TabelaEstudos from "../components/dashboard/TabelaEstudos";
import UserCard from "../components/dashboard/cards/UserCard";
import ErrosAcertos from "../components/dashboard/cards/ErrosAcertos";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  titulo: {
    color: '#552583',
    fontWeight: 'bold',
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
  Results: {
    textAlign: "center",
    padding: 12,
    paddingBottom: 30,
  },
  linha2: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "row",
    paddingBottom: 80,
  },
  tabelaEstudos: {
    paddingRight: 55,
    maxWidth: 500,
  },
  editor: {
    backgroundColor: "white"
  },
  texto: {
    textAlign: 'justify',
    fontSize: 16,
  },
  buttonEstudar: {
    background: '#3298dc',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 150,
  },
}));

export const PlanoEstudo = ({ aproveitamento, acertos, tempo }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
        <Grid container spacing={3} className={classes.linha1}>
          <Grid item xs={3}>
            <Paper className={classes.user}>
              <UserCard/>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.Results}>
              <ErrosAcertos
            acertos={acertos}
            aproveitamento={aproveitamento}
            tempo={tempo}
          />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <PieChart />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <BarChart />
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              <h2>O que estudar:</h2>
              <p className={classes.texto}>Baseado nos seus resultados essas são as disciplinas que você deria focar.</p>
              <TabelaEstudos />
              <Button size="medium" disableElevation variant="contained" href="/estudar" className={classes.buttonEstudar}>
                Estudar
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>Sua evolução</h2>
              <LineChart />
            </Paper>
          </Grid>
        </Grid>
    </React.Fragment>
  );
};

export default PlanoEstudo;