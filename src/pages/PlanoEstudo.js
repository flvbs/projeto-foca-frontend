import React, { useState, useEffect } from "react";
import Header from "../components/framework/Header";
import Editor from "../components/dashboard/Editor"
import TabelaEstudos from "../components/dashboard/TabelaEstudos";
import BlueCard from "../components/dashboard/cards/BlueCard";
import ErrosAcertos from "../components/dashboard/cards/ErrosAcertos";

// MaterialUI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(16),
  },
  titulo: {
    marginTop: theme.spacing(8),
  },
  titulo2: {
    marginBottom: theme.spacing(2),
  },
  linha1: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "row",
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
}));

export const PlanoEstudo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container className={classes.container} component="main" maxWidth="lg">
      <div className={classes.linha1}>
        <div className={classes.tabelaEstudos}>
          <BlueCard/>
        </div>
        <ErrosAcertos/>
      </div>
      <Typography className={classes.titulo}
                    component="h2"
                    variant="h3"
                    align="left"
                >
                    Plano de estudos
                </Typography>
        <div className={classes.linha2}>
          <div className={classes.tabelaEstudos}>
          <Typography className={classes.titulo2}
                    component="h4"
                    variant="h5"
                    align="left"
                >
                    O que estudar:
                </Typography>
            <TabelaEstudos/>
          </div>
          <div>
          <Typography className={classes.titulo2}
                    component="h4"
                    variant="h5"
                    align="left"
                >
                    Minhas anotações:
                </Typography>
            <div className={classes.editor}>
              <Editor/>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default PlanoEstudo;