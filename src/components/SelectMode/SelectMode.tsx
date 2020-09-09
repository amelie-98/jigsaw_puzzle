import React from 'react';

import './SelectMode.sass';

interface Iprops {
  setMode: any;
}

const SelectMode: React.FC<Iprops> = (props: Iprops) => {
  const { setMode } = props;
  return (
    <>
      <div className="button very-easy" onClick={() => setMode('very-easy')}>
        Very Easy
      </div>
      <div className="button easy" onClick={() => setMode('easy')}>
        Easy
      </div>
      <div className="button medium" onClick={() => setMode('medium')}>
        Medium
      </div>
      <div className="button hard" onClick={() => setMode('hard')}>
        Hard
      </div>
    </>
  );
};

export default SelectMode;
