import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LoseScreen: React.FC = () => {
  const history: any = useHistory();

  useEffect(() => {
    const body: any = document.querySelector('body');
    body.style.backgroundImage = 'url(https://media.giphy.com/media/11mwI67GLeMvgA/giphy.gif)';
    body.style.backgroundSize = 'cover';
    return () => {
      body.style.backgroundImage = null;
    };
  }, []);

  return (
    <div className="pyro">
      <div
        className="button-continue"
        style={{ width: 700, marginLeft: -350, border: 'solid 1px white' }}
        onClick={() => history.push('/')}
      >
        <h1>
          <span role="img" aria-label="test1">
            Bà Ngoại T còn chơi hay hơn m :))
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LoseScreen;
