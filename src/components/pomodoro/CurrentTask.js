import React, { Component } from 'react';
import Tomatoes from './Tomatoes';

class CurrentTask extends Component {
  render() {
    const {
      taskName,
      countdownText,
      tomatoes,
      isCompleted,
    } = this.props;
    const defaultTask = taskName ? taskName : '';
    const completedStatus = isCompleted ? 'is-completed' : '';

    return (
      <div className={`current-task ${completedStatus}`}>
        <div className="current-task__head">
          <div className="current-task__content-wrapper">
            <h2 className="current-task__name">{defaultTask}</h2>
            <div className="current-task__tomatoes">
              {Array(tomatoes)
                .fill('X')
                .map((tomato, i) => (
                  <Tomatoes key={i} />
                ))}
            </div>
          </div>
        </div>
        <div className="current-task__highlight">
          <mark className="current-task__countdown">{countdownText}</mark>
        </div>
      </div>
    );
  }
}

export default CurrentTask;
