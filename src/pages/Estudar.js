import React, { useState, useEffect } from "react";
import Header from "../components/framework/Header";
import Editor from "../components/dashboard/Editor"
import TabelaEstudos from "../components/dashboard/TabelaEstudos";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(16),
  },
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

export const Estudar = ({ aproveitamento, acertos, tempo }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container className={classes.container} component="main" maxWidth="lg"> 
        <div className={classes.linha2}>
          <div className={classes.tabelaEstudos}>
            <Typography className={classes.titulo2}
              component="h4"
              variant="h5"
              align="left"
            >
              O que estudar:
            </Typography>
            <TabelaEstudos />
          </div>
          <div>
            <Typography className={classes.titulo2}
              component="h4"
              variant="h5"
              align="left"
            >
              Anotações:
            </Typography>
            <div className={classes.editor}>
              <Editor />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Estudar;