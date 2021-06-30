import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Pomodoro from '../pomodoro/Pomodoro';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
    return ['Fazer exercícios', 'Ler conteúdo/Ver vídeoaulas', 'Fazer anotações'];
  }
  
function getStepContent(step) {
    switch (step) {
      case 0:
        return `Hora de praticar! Faça questões sobre os assuntos abordados no seu último ciclo de estudos.`;
      case 1:
        return `Leia textos online, livros ou assista a vídeoaulas. Depois da primeira leitura,
                releia os texto para absorver melhor os detalhes e atente-se às informações mais específicas.`;
      case 2:
        return `Para criar anotações produtivas, a dica é fazer uma primeira leitura do texto, apenas para 
                conhecer o seu conteúdo e entender do que ele se trata. Depois, em uma nova leitura, 
                você deverá fazer as marcações dos pontos mais relevantes, sublinhar os trechos mais interessantes
                para a matéria e, realmente, absorver o conhecimento que o texto tem a oferecer.`;
      default:
        return 'Unknown step';
    }
  }

export default function Passos() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

return (
<div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
              <Pomodoro/>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Voltar
                  </Button>
                  <Button
                    disableElevation
                    variant="contained"
                    style={{ background: '#3298dc', color: '#fff', fontWeight: 'bold', }}
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={2} className={classes.resetContainer}>
          <Typography>Muito bom! Ciclo finalizado.</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Refazer
          </Button>
        </Paper>
      )}
    </div>

   );
 }    