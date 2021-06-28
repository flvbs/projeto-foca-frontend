import React, { useState, useEffect } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    tabela: {
      display: "flex",
      flexDirection: "row",
      minWidth: 800,
    },
    cards: {
        display: "flex",
        flexDirection: "row",
    },
    button: {
      marginLeft: 150,
      textDecoration: "none",
    },
    errosAcertos: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-around',
      marginTop: 30,
    },
    errAce: {
      minWidth: 200,
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-around',
      alignItems: "center",
      color: "#fff",
      fontSize: 25,
    },
    paper: {
      backgroundColor: '#552583',
      color: '#fff',
      textAlign: "center",
    },
  }));

const ErrosAcertos = ({ aproveitamento, acertos, tempo }) => {
  const classes = useStyles();

  console.log(aproveitamento,acertos,tempo)

  return (
    <>
     <Card>
      <CardContent style={{backgroundColor: "#fff"}}>

        <div className={classes.tabela}>
          <h3 className="bd-highlight w-100 font-weight-bold">Seu desempenho 📈</h3>
        </div>
        <hr />
        <div className={classes.errosAcertos}>
          <Paper elevation={0} className={classes.paper}>
            <h3>APROVEITAMENTO</h3>
            <div className={classes.errAce} style={{ backgroundColor: '#211f20' }}>
              <h2 className="bd-highlight w-100 font-weight-bold">{aproveitamento}%</h2>
            </div>
          </Paper>
          <Paper elevation={0} className={classes.paper}>
            <h3>ACERTOS</h3>
            <div className={classes.errAce} style={{ backgroundColor: '#ffb20a' }}>
              <h2 className="bd-highlight w-100 font-weight-bold">{acertos}</h2>
            </div>
          </Paper>
          <Paper elevation={0} className={classes.paper}>
            <h3>TEMPO DE PROVA</h3>
            <div className={classes.errAce} style={{ backgroundColor: '#d3d3d5', color: "#222", }}>
              <h2 className="bd-highlight w-100 font-weight-bold">{tempo}</h2> 
            </div>
          </Paper>
        </div>
      </CardContent>
    </Card>
    </>
  );
}

export default ErrosAcertos;
