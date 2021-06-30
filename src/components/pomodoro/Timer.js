import React, { Component } from 'react';
import TimerButtons from './TimerButtons';

class Timer extends Component {
  render() {
    const {
      ringtoneRef,
      isWorking,
      isPlaying,
      startTimer,
      stopTimer,
      resetTimer,
    } = this.props;

    return (
      <div className="timer">
        <audio ref={ringtoneRef} className="timer__ringtone">
          <source src="" />
        </audio>

        <div className="timer__control-btns">
          <TimerButtons
            isWorking={isWorking}
            isPlaying={isPlaying}
            startTimer={startTimer}
            stopTimer={stopTimer}
          />
        </div>

        <div className="timer__reset">
          <button
            className="timer__reset-btn"
            title="Reiniciar contador"
            onClick={() => resetTimer()}
          />
        </div>
      </div>
    );
  }
}

export default Timer;
