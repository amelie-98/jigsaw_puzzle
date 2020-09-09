import React, { useMemo } from 'react';

import DragItem from './DragItem';
import Wrapper from './DragArea.styled';

interface Iprops {
  mode: string;
  image: number;
  numberPart: number;
  partPairing: any;
}

const DropArea: React.FC<Iprops> = (props: Iprops) => {
  const { mode, image, numberPart, partPairing } = props;

  const urlImage: string = useMemo(() => {
    const getUrlImage: any = (type: string) => `url(${require(`../../assets/image-${image}.${type}`)})`;
    if ([1, 2, 3, 4, 5, 8].includes(image)) return getUrlImage('jpg');
    return getUrlImage('png');
  }, [image]);

  const handleRandomIndex: Array<number> = useMemo(
    () => [...Array(numberPart)].map((_, index) => index + 1).sort(() => Math.random() - Math.random()),
    [numberPart],
  );

  return (
    <Wrapper>
      <div className="total-item-drag" id="scroll-bar">
        {[...Array(numberPart)]
          .map((_, index) => index + 1)
          .map((item, index) => (
            <DragItem
              className={`${mode} ${mode}-${handleRandomIndex[index]}`}
              style={{ backgroundImage: urlImage }}
              key={item}
              indexPart={handleRandomIndex[index]}
              partPairing={partPairing}
            />
          ))}
      </div>
    </Wrapper>
  );
};

export default DropArea;
