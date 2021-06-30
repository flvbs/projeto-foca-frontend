import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import QuizSelect from "./pages/QuizSelect"
import RandomQuiz from "./pages/RandomQuiz"
import Button from '@material-ui/core/Button';
import Login from "./pages/Login"
import Cadastrar from "./pages/Cadastrar"
import Home from "./pages/Home"
import IniciarQuiz from './pages/IniciarQuiz'
import Inicial from './pages/Inicial'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Archivo',
      'sans-serif'
    ].join(','),
  },});

  const NoMatch = ({ location }) => (
    <div style={{ textAlign: 'center', marginTop: 200, color:"#552583" }}>
      <h1>
        404
      </h1>
      <div>
        <SentimentVeryDissatisfiedIcon style={{ fontSize: 100 }} />
      </div>
      <h3>
        Não tem nada aqui.
      </h3>
      <div className="has-text-centered">
            <Button size="large" href="/" style={{ background: '#fdb927', fontWeight: 'bold' }}>
              Voltar
            </Button>
          </div>
    </div>
  );

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Switch>
      <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/cadastrar" component={Cadastrar} exact/>
        <Route path="/teste" component={QuizSelect} exact/>
        <Route path="/r/:topic" component={RandomQuiz} exact/>
        <Route path="/foca" component={IniciarQuiz} exact/>
        <Route path="/inicial" component={Inicial} exact/>
        <Route component={NoMatch} />
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
