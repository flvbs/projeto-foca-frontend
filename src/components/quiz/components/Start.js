import React from 'react';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      text: "center",
      minWidth: 500,
      paddingTop: 15,
  },
  texto: {
    fontSize: 18,
    padding: 10,
  },
}));

const Start = ({ onQuizStart }) => {
  const classes = useStyles();

  return(
    
      <Card>
        <CardContent>
          <Typography align="justify" className={classes.texto}>
            O teste de nivelamento é individual, portanto, é importante que faça o teste sozinho(a),
            para que os resultados sejam o mais verdadeiro possível. As questões são de mútipla escolha, 
            só há uma alternativa correta.
          </Typography>
        <div className={classes.card}>
            <Button disableElevation variant="contained" style={{ background: '#3298dc', color: '#fff', fontWeight: 'bold', }}
            onClick={onQuizStart}>Começar</Button>
        </div>
        </CardContent>
    </Card>
    
  );
}

export default Start;