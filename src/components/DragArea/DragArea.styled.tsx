import styled from 'styled-components';

export default styled.div`
  flex: 1;

  .total-item-drag {
    height: 100%;
    overflow: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 10px;
  }

  /* css scroll bar*/

  #scroll-bar::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);
  }

  #scroll-bar::-webkit-scrollbar {
    width: 12px;
    background-color: rgba(255, 255, 255, 1);
  }

  #scroll-bar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgb(140 1 255 / 63%);
  }

  /* css scroll bar*/
`;
