import React from 'react';

import DropItem from './DropItem';
import Wrapper from './DropArea.styled';

interface Iprops {
  mode: string;
  image: number;
  arrayIndexPartDrop: any;
  setDropPart: any;
}

const DropArea: React.FC<Iprops> = (props: Iprops) => {
  const { mode, image, arrayIndexPartDrop, setDropPart } = props;

  return (
    <Wrapper>
      {arrayIndexPartDrop.map((item: number, index: number) => (
        <DropItem
          key={index}
          mode={mode}
          image={image}
          indexInArray={index}
          indexPart={item}
          setDropPart={setDropPart}
        />
      ))}
    </Wrapper>
  );
};

export default DropArea;
