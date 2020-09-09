import React, { useEffect } from 'react';

import SelectImage from '../SelectImage';
import SelectMode from '../SelectMode';
import Wrapper from './StartScreen.styled';

interface Iprops {
  mode: string;
  setMode: any;
  setImage: any;
}

const StartScreen: React.FC<Iprops> = (props: Iprops) => {
  const { mode, setMode, setImage } = props;

  useEffect(() => {
    const body: any = document.querySelector('body');
    body.style.backgroundImage = `url(${require(`../../assets/moon.jpg`)})`;
    return () => {
      body.style.backgroundImage = null;
    };
  }, []);

  return (
    <Wrapper>
      {mode && <SelectImage setImage={setImage} />}
      {!mode && <SelectMode setMode={setMode} />}
    </Wrapper>
  );
};

export default StartScreen;
