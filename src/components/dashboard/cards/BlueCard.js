import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: "auto"
    },
  }));

export default props => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent style={{backgroundColor: "#fff"}}>
      <div
        className="card bg-primary p-4 shadow"
        style={{ border: 0, height: 200 }}
      >
        <h3 className="text-white">Olá, Convidadx! Bora estudar? 📚</h3>
        <hr />
        <p className="text-white" style={{ fontSize: 16 }}>
          Aqui você pode monitorar sua aprendizagem e visualizar seu plano de estudos. 
          O plano foi criado para você de acordo com o seu desempenho no teste de nivelamento. 
        </p>
      </div>
      <div className={classes.button}>
            <h3 className="bd-highlight w-100 font-weight-bold">
            <Button disableElevation variant="contained" color="primary" href="/teste_nivelamento">
              Fazer teste de nivelamento
            </Button>
            </h3>
          </div> 
  </CardContent>
       
    </Card>
  );
};
