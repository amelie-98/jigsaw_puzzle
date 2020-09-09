import React, { useState, useEffect, useMemo } from 'react';

import Wrapper from './CountDown.styled';

interface Iprops {
  countDownTime: number;
}

const CountDown: React.FC<Iprops> = (props: Iprops) => {
  const { countDownTime } = props;

  const [time, setTime] = useState(countDownTime);

  useEffect(() => {
    const interval: number = setInterval(() => {
      time >= 0 && setTime(time - 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    time <= 0 && (window.location.href = 'http://localhost:3000/play-game/lose');
  }, [time]);

  const style: any = useMemo(() => {
    if (time >= 0) return { width: `${(time / countDownTime) * 100}%` };
    return { width: 0 };
  }, [time, countDownTime]);

  return (
    <Wrapper>
      <div className="neon" style={style}>
        <span className="text" data-text="Hoang Tu Lap Trinh">
          Hoang Tu Lap Trinh
        </span>
        <span className="gradient"></span>
        <span className="spotlight"></span>
      </div>
    </Wrapper>
  );
};

export default CountDown;
