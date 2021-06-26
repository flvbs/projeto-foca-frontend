import React from "react"
import Header from "../components/framework/Header";
import Footer from "../components/framework/Footer";
import Quiz from "../components/quiz/Quiz"

// MaterialUI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    titulo: {
        marginTop: theme.spacing(16),
        marginBottom: theme.spacing(5)
      },
  }));

export const IniciarQuiz = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header /> 
            <Container maxWidth="sm" component="main">
            <Typography className={classes.titulo}
                    component="h3"
                    variant="h4"
                    align="center"
                >
                    Teste de nivelamento
                </Typography>
                <Quiz/>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default IniciarQuiz;