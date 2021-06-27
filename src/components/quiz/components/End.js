import React, { useEffect, useState } from 'react';
import { formatTime } from '../utils';
import PlanoEstudo from '../../../pages/PlanoEstudo';

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

  const aproveitamento = Math.floor((correctAnswers / data.length) * 100);
  const tempo = formatTime(time);
 
  console.log(aproveitamento, correctAnswers, tempo);

  return(
        <div>  
          <PlanoEstudo
            acertos={correctAnswers}
            aproveitamento={aproveitamento}
            tempo={tempo}
          />
        </div>
  );
}

export default End;