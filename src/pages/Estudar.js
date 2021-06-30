import React, { useState, useEffect } from "react";
import Header from "../components/framework/Header";
import Editor from "../components/dashboard/Editor"
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TabPanel from "../components/estudar/TabPanel"
import Footer from "../components/framework/Footer"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(16),
  },
  editor: {
    minHeight: 624
  },
  texto: {
    textAlign: 'justify',
    fontSize: 16,
  },
  buttonTeste: {
    background: '#3298dc',
    color: '#fff',
    fontWeight: 'bold',
  },
  estudar: {
      padding: 15
  },
  texto: {
    textAlign: 'justify',
    fontSize: 16,
  },
}));

export const Estudar = ({ aproveitamento, acertos, tempo }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container className={classes.container} component="main" maxWidth="lg"> 
      <Grid container spacing={3} className={classes.linha1}>
          <Grid item xs={12}>
            <Paper className={classes.estudar}>
              <h2>Estudar</h2>
              <p  className={classes.texto}>O FOCA preparou e organizou seu plano de esudos a partir da análise dos seu desempenho. Você não precisa se preocupar com
                  o que estudar, quando estudar ou como estudar. Nosso sistema utiliza uma combinação de técnicas - o pomodoro, a repetição espaçada e
                  o ciclo de estudos - para te ajudar a ter o melhor aproveitamento das suas horas estudadas. </p>
            <Button href="/foca" className={classes.buttonTeste}>
                Teste de nivelamento
            </Button>
            </Paper>
          </Grid>
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
            <h2>Foca nos estudos!</h2>
        </Grid>
        <Grid item xs={6}>
            <h2>Anota aí</h2>
        </Grid>    
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
            <Paper><TabPanel/></Paper>
        </Grid>
        <Grid item xs={6}>
            <Paper className={classes.editor}><Editor /></Paper>
        </Grid>    
      </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Estudar;