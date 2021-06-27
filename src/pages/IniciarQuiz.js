import React from "react"
import Header from "../components/framework/Header";
import Footer from "../components/framework/Footer";
import Quiz from "../components/quiz/Quiz"

// MaterialUI
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(5)
      },
  }));

export const IniciarQuiz = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header /> 
            <Container className={classes.container} maxWidth="lg" component="main">
                <Quiz/>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default IniciarQuiz;