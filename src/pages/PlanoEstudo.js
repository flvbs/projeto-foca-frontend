import React, { useState, useEffect } from "react";
import Header from "../components/framework/Header";
import Editor from "../components/Editor";
import TabelaEstudos from "../components/TabelaEstudos";

// MaterialUI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  titulo: {
    marginTop: theme.spacing(16),
  },
  titulo2: {
    marginBottom: theme.spacing(2),
  },
  tabela: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "row",
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
      <Container component="main" maxWidth="lg">
      <Typography className={classes.titulo}
                    component="h2"
                    variant="h3"
                    align="left"
                >
                    Plano de estudos
                </Typography>
        <div className={classes.tabela}>
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