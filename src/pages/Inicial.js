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
  titulo: {
    marginTop: theme.spacing(8),
    color: '#552583',
    fontWeight: 'bold',
  },
  titulo2: {
    marginBottom: theme.spacing(2),
  },
  linha1: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "row",
  },
}));

export const PlanoEstudo = ({ aproveitamento, acertos, tempo }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container className={classes.container} component="main" maxWidth="lg">
      <div className={classes.linha1}>
        <div className={classes.tabelaEstudos}>
          <BlueCard/>
        </div>
        <ErrosAcertos 
        acertos={acertos}
        aproveitamento={aproveitamento}
        tempo={tempo}
        />
      </div>
      </Container>
    </React.Fragment>
  );
};

export default PlanoEstudo;