import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={3660}
        shortRestTime={300}
        LongrestTime={900}
        cycles={4}
      />
    </div>
  );
}

export default App;
