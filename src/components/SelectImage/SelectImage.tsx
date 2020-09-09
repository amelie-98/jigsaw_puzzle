import React from 'react';
import { useHistory } from 'react-router-dom';

import Wrapper from './SelectImage.styled';

import image1 from '../../assets/image-1.jpg';
import image2 from '../../assets/image-2.jpg';
import image3 from '../../assets/image-3.jpg';
import image4 from '../../assets/image-4.jpg';
import image5 from '../../assets/image-5.jpg';
import image6 from '../../assets/image-6.png';
import image7 from '../../assets/image-7.png';
import image8 from '../../assets/image-8.jpg';

interface Iprops {
  setImage: any;
}

const listImage: Array<any> = [image1, image2, image3, image4, image5, image6, image7, image8];

const SelectImage: React.FC<Iprops> = (props: Iprops) => {
  const { setImage } = props;

  const history: any = useHistory();

  const selectImage: any = (index: number) => {
    setImage(index);
    history.push('/play-game');
  };

  return (
    <Wrapper>
      {listImage.map((image, index) => (
        <img src={image} key={index} alt={`img-${index}`} onClick={() => selectImage(index + 1)} />
      ))}
    </Wrapper>
  );
};

export default SelectImage;
