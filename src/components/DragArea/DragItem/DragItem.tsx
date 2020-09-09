import React, { useEffect } from 'react';

import { DragSource } from 'react-dnd';
import Wrapper from './DragItem.styled';

interface Iprops {
  isDragging: any;
  connectDragSource: any;
  className: string;
  style: object;
  indexPart: number;
  partPairing: any;
}

const itemSource: any = {
  //trước khi kéo

  beginDrag(props: any) {
    return {};
  },
  //kết thúc kéo
  endDrag(props: any, monitor: any, component: any) {
    if (!monitor.didDrop()) {
      return;
    }

    return props.partPairing(props.indexPart);
  },
};

const collect = (connect: any, monitor: any) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
};

const DropItem: React.FC<Iprops> = (props: Iprops) => {
  const { isDragging, connectDragSource, className, style } = props;
  const opacity: number = isDragging ? 0 : 1;

  useEffect(() => {
    const body: any = document.querySelector('body');
    body.style.backgroundImage = `url(${require(`../../../assets/moon.jpg`)})`;
    return () => {
      body.style.backgroundImage = null;
    };
  }, []);

  return connectDragSource(
    // add div on top to run react-dnd correctly
    <div>
      <Wrapper>
        <div className={`${className} border-white`} style={{ ...style, opacity }} />
      </Wrapper>
    </div>,
  );
};

export default DragSource('item', itemSource, collect)(DropItem);
