import React, { useEffect, useState } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return(
    <Card>
      <CardContent>
        <div className="content">
          <h3>Resultados</h3>
          <p>{correctAnswers} de {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>Tempo de duração:</strong> {formatTime(time)}</p>
          <Button disableElevation variant="contained" color="primary" href="/plano_estudo">Ver dashboard</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default End;