import React, { useMemo } from 'react';
import { DropTarget } from 'react-dnd';

import Wrapper from './DropItem.styled';

interface Iprops {
  mode: string;
  image: number;
  indexInArray: number;
  indexPart: number;
  setDropPart: any;
  connectDropTarget: any;
  hovered: any;
}

const collect = (connect: any, monitor: any) => {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  };
};

const canDropTheTarget = {
  drop(props: any, monitor: any, component: any) {
    if (monitor.didDrop()) {
      return;
    }
    return props.setDropPart(props.indexInArray);
  },
};

const DropItem: React.FC<Iprops> = (props: Iprops) => {
  const { indexPart, image, mode, connectDropTarget, hovered } = props;

  const urlImage: string = useMemo(() => {
    const getUrlImage: any = (type: string) => `url(${require(`../../../assets/image-${image}.${type}`)})`;
    if ([1, 2, 3, 4, 5, 8].includes(image)) return getUrlImage('jpg');
    return getUrlImage('png');
  }, [image]);

  const styleInline: object = indexPart !== -1 && !hovered ? { backgroundImage: urlImage } : {};

  const backgroundColor: string = hovered ? '#b4ff00ab' : '';

  return connectDropTarget(
    // add div on top to run react-dnd correctly
    <div>
      <Wrapper>
        <div
          className={`${mode} ${mode}-${indexPart} ${indexPart === -1 ? 'none-image' : ''}`}
          key={indexPart}
          style={{ ...styleInline, backgroundColor }}
        />
      </Wrapper>
    </div>,
  );
};

export default DropTarget('item', canDropTheTarget, collect)(DropItem);
