import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import isEqual from 'lodash/isEqual';

import CountDown from './components/CountDown';
import DragArea from './components/DragArea';
import DropArea from './components/DropArea';
import LoseScreen from './components/LoseScreen';
import StartScreen from './components/StartScreen';
import WinScreen from './components/WinScreen';
import Wrapper from './App.styled';

const countDownTime: number = 60;

const App: React.FC = () => {
  const history: any = useHistory();

  const [mode, setMode] = useState('');
  const [image, setImage] = useState(0);

  (!mode || !image) && window.location.href.slice(-9) === 'play-game' && history.push('/');

  let numberPart: number;

  switch (mode) {
    case 'very-easy':
      numberPart = 4;
      break;
    case 'easy':
      numberPart = 8;
      break;
    case 'medium':
      numberPart = 16;
      break;
    case 'hard':
      numberPart = 32;
      break;
    default:
      numberPart = 4;
  }
  const [dropPart, setDropPart] = useState(-1);
  const [arrayIndexPartDrop, setArrayIndexPartDrop] = useState([-1]);

  useEffect(() => {
    setArrayIndexPartDrop([...Array(numberPart)].map(() => -1));
  }, [numberPart]);

  const partPairing: any = (partDrag: number) => {
    const cloneArrayIndexPartDrop: Array<number> = [...arrayIndexPartDrop];
    cloneArrayIndexPartDrop[dropPart] = partDrag;
    setArrayIndexPartDrop(cloneArrayIndexPartDrop);
  };

  useEffect(() => {
    if (
      isEqual(
        arrayIndexPartDrop,
        [...Array(numberPart)].map((_, index) => index + 1),
      )
    ) {
      setMode('');
      setImage(0);
      window.location.href = `${window.location.origin}/play-game/win`;
    }
  }, [numberPart, arrayIndexPartDrop]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <StartScreen mode={mode} setMode={setMode} setImage={setImage} />
        </Route>
        <Route path="/play-game" exact>
          <Wrapper>
            <CountDown countDownTime={countDownTime} />
            <div className="main">
              <DragArea mode={mode} image={image} numberPart={numberPart} partPairing={partPairing} />
              <DropArea mode={mode} image={image} arrayIndexPartDrop={arrayIndexPartDrop} setDropPart={setDropPart} />
            </div>
            <CountDown countDownTime={countDownTime} />
          </Wrapper>
        </Route>
        <Route path="/play-game/win">
          <WinScreen />
        </Route>
        <Route path="/play-game/lose">
          <LoseScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
