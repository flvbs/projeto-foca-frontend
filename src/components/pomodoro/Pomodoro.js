import React, { Component } from 'react';
import CurrentTask from './CurrentTask';
import Timer from './Timer';
import { timeConverter } from '../../helpers';

class Pomodoro extends Component {
  state = {
    taskName: '',
    isCompleted: false,
    isWorking: true,
    isPlaying: false,
    countdownText: '00:10',
    time: {
      work: 10,
      break: 5,
    },
    tomatoes: 0,
  };

  ringtoneRef = React.createRef();

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  addNewTask = (e, taskName) => {
    e.preventDefault();

    if (!taskName) return;

    e.currentTarget.reset();
    this.setState({ taskName });
    this.resetTimer();
  };

  toggleComplete = e => {
    this.setState({ isCompleted: e.currentTarget.checked });
  };

  calculateTimeLeft = mode => {
    const time = this.state.time[mode];
    let runningTime = time - 1;

    if (time === 0) {
      this.completeTimer(mode);
      return;
    }

    this.setState({
      time: {
        ...this.state.time,
        [mode]: runningTime,
      },
      countdownText: timeConverter(runningTime),
    });
  };

  runTimer = mode => {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.calculateTimeLeft(mode), 1000);
  };

  startTimer = () => {
    const { isPlaying, isWorking } = this.state;

    if (isPlaying) return;

    if (isWorking) {
      this.runTimer('work');
    } else {
      this.runTimer('break');
    }

    this.playSound();

    this.setState({
      isPlaying: !isPlaying,
    });
  };

  stopTimer = () => {
    clearInterval(this.timer);

    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  };

  completeTimer = mode => {
    clearInterval(this.timer);

    const workingStatus = mode === 'break' ? true : false;
    const timeStatus = mode === 'work' ? 10 : 5;
    const textStatus = mode === 'work' ? '00:05' : '00:10';

    this.AddTomato(mode);
    this.playSound();

    this.setState({
      isPlaying: false,
      isWorking: workingStatus,
      time: {
        ...this.state.time,
        [mode]: timeStatus,
      },
      countdownText: textStatus,
    });
  };

  AddTomato = mode => {
    if (mode === 'work') {
      this.setState(prevState => {
        return { tomatoes: prevState.tomatoes + 1 };
      });
    }
  };

  playSound = () => {
    const { time } = this.state;
    const timeIsUp = Object.keys(time).filter(type => time[type] === 0);

    this.ringtoneRef.current.src =
      timeIsUp.length > 0
        ? 'https://res.cloudinary.com/pamcy/video/upload/v1562885721/audio/Beeper_End.mp3'
        : 'https://res.cloudinary.com/pamcy/video/upload/v1562627619/audio/Beep_Short.mp3';

    this.ringtoneRef.current.play();
  };

  resetTimer = () => {
    this.setState({
      countdownText: '00:10',
      isCompleted: false,
      isPlaying: false,
      isWorking: true,
      tomatoes: 0,
    });
  };

  render() {
    const {
      taskName,
      countdownText,
      isCompleted,
      isWorking,
      isPlaying,
      tomatoes,
    } = this.state;
    const currentMode = isWorking ? '' : 'onBreakingMode';
    const playingStatus = isPlaying ? 'isPlaying' : '';

    return (
      <div className={`container ${currentMode} ${playingStatus}`}>
            <CurrentTask
              taskName={taskName}
              countdownText={countdownText}
              tomatoes={tomatoes}
              isCompleted={isCompleted}
              toggleComplete={this.toggleComplete}
            />
        <Timer
          ringtoneRef={this.ringtoneRef}
          isWorking={isWorking}
          isPlaying={isPlaying}
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          resetTimer={this.resetTimer}
        />
      </div>
    );
  }
}

export default Pomodoro;
