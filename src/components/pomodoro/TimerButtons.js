import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

const TimerButtons = props => {
  const { isPlaying, startTimer, stopTimer } = props;

  return (
    <>
      {isPlaying ? (
        <button
          className="timer__pause-btn"
          title="Pausar contador"
          onClick={() => stopTimer()}
        >
         <PauseCircleFilledIcon style={{ fontSize: 50 }}/>
        </button>
      ) : (
        <button
          className="timer__play-btn"
          title="Iniciar contador"
          onClick={() => startTimer()}
        >
          <PlayCircleFilledIcon style={{ fontSize: 50 }}/>
        </button>
      )}
    </>
  );
};

export default TimerButtons;
