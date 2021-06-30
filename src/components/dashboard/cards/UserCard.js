import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 30,
  },
  buttonTeste: {
    background: '#3298dc',
    color: '#fff',
    fontWeight: 'bold',
  },
  user: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: "center",
    padding: 12,
  },
}));

export default props => {
  const classes = useStyles();

  return (

    <div className={classes.user}>
      <h2>Olá, Convidadx!</h2>
      <AccountCircle style={{ fontSize: 100 }} />
      <Button size="medium" disableElevation variant="contained" href="/foca" className={classes.buttonTeste}>
        Teste de nivelamento
      </Button>
    </div>

  );
};
