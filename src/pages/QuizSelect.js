import React from "react"
import Header from "../components/framework/Header";
import Footer from "../components/framework/Footer";
import ConnectApi from "../api/ConnectApi"

// MaterialUI
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:"#fdb827",
        color: '#542583'
    },
    cardPricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: theme.spacing(2),
    },
}));

export const QuizSelect = () => {

    const classes = useStyles();
    const API_URL = "http://localhost:8000/quiz/";
    const [dataState] = ConnectApi(API_URL);

    return (
        <React.Fragment>
            <Header />
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography
                    component="h2"
                    variant="h3"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Regras do Teste
                </Typography>
                <Typography
                    variant="h6"
                    align="justify"
                    color="textSecondary"
                    component="p"
                >
                    O teste de nivelamento é individual, portanto, é de suma importância que você realize sozinho,
                    para que os resultados sejam o mais verdadeiro possível. As provas serão formadas apenas com questões teóricas, 
                    seguindo o conteúdo programático vigente. Utilize somente o navegador Google Chrome para realizar a prova.
                    Você terá apenas 50 minutos para concluir o teste.
                </Typography>
            </Container>
            <Container maxWidth="sm" component="main">
                <Grid container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justify="center"
                      >                
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        href="http://localhost:3000/r/teste"
                        className={classes.Button}
                    >
                        Iniciar Teste
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        href="http://localhost:3000/plano_estudo"
                        className={classes.Button}
                    >
                        Visualizar plano de estudos
                    </Button>
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default QuizSelect;