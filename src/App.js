import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import QuizSelect from "./pages/QuizSelect"
import RandomQuiz from "./pages/RandomQuiz"
import PlanoEstudo from "./pages/PlanoEstudo"
import Login from "./pages/Login"
import Cadastrar from "./pages/Cadastrar"
import Home from "./pages/Home"
import IniciarQuiz from './pages/IniciarQuiz'
import Inicial from './pages/Inicial'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Archivo',
      'sans-serif'
    ].join(','),
  },});

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
        <Route path="/plano_estudo" component={PlanoEstudo} exact/>
        <Route path="/foca" component={IniciarQuiz} exact/>
        <Route path="/inicial" component={Inicial} exact/>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
