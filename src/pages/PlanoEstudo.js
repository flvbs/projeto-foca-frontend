import React, { useState, useEffect } from "react";
import Header from "../components/framework/Header";
import Footer from "../components/framework/Footer";
import StudyTable from "../components/planoestudos/StudyTable"

// MaterialUI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabela: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
  },
}));

export const PlanoEstudo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container component="main" maxWidth="md">
        <div className={classes.tabela}>
            <StudyTable />
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default PlanoEstudo;