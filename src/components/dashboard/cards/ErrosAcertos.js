import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TimerIcon from '@material-ui/icons/Timer';

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
      fontWeight: 'bold',
    },
    errAce: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-around',
      padding: 0.5,
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
        <h2>Seus resultados</h2>
        <div className={classes.errosAcertos}>
          <Grid item xs={4}>
            <div className={classes.errAce} style={{ backgroundColor: '#9966ff' }}>
              <EmojiEventsIcon style={{ fontSize: 50 }}/>
              <h2 className="bd-highlight w-100 font-weight-bold">{aproveitamento}%</h2>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.errAce} style={{ backgroundColor: '#48c774' }}>
              <CheckCircleIcon style={{ fontSize: 50 }}/>
              <h2 className="bd-highlight w-100 font-weight-bold">{acertos}</h2>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.errAce} style={{ backgroundColor: '#3273dc' }}>
              <TimerIcon style={{ fontSize: 50 }}/>
              <h2 className="bd-highlight w-100 font-weight-bold">{tempo}</h2> 
            </div>
          </Grid>
        </div>
    </>
  );
}

export default ErrosAcertos;
