import React from 'react';
import { useHistory } from 'react-router-dom';

import './WinScreen.scss';
import './ButtonContinue.css';

const WinScreen: React.FC = () => {
  const history: any = useHistory();

  return (
    <div className="pyro">
      <div className="button-continue" onClick={() => history.push('/')}>
        <h1>
          <span role="img" aria-label="test1">
            🥇💪🏻🤘🏻
          </span>
          <span className="first"> Dễ VL </span>
          <span role="img" aria-label="test2">
            👌💋🏆
          </span>
        </h1>
      </div>

      <div className="before" />
      <div className="after" />
    </div>
  );
};

export default WinScreen;
