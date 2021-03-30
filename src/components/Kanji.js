import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { fade } from '../animation';

const Kanji = ({ kanjiChara }) => {
  const [activeState, setActiveState] = useState(false);
  const [flipState, setFlipState] = useState(false);
  const [kanjiCharaState, setKanjiCharaState] = useState(true);
  const [kanjiData, setKanjiData] = useState('');
  const kanjiDataHandler = () => {
    axios
      .get(`https://kanjiapi.dev/v1/kanji/${kanjiChara}`)
      .then((data) => setKanjiData(data.data.meanings))
      .catch((err) => console.log(err));
    setActiveState(!activeState);
    setKanjiCharaState(!kanjiCharaState);
    setFlipState(!flipState);
  };

  return (
    <StyledKanjiCard
      variants={fade}
      initial='hidden'
      animate='show'
      onClick={kanjiDataHandler}
    >
      <div className={flipState ? 'card is-flipped' : 'card'}>
        <div className='cardFace cardFaceFront'>
          <h1 className={kanjiCharaState ? 'kanjiChara' : 'kanjiChara hide'}>
            {kanjiChara}
          </h1>
        </div>
        <div className='cardFace cardFaceBack'>
          <div
            className={activeState ? 'kanji-meanings active' : 'kanji-meanings'}
          >
            {kanjiData &&
              (kanjiData
                ? kanjiData.map((meaning, index) => (
                    <nobr
                      key={meaning}
                      style={{
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {index ? ', ' : ''}
                      {meaning}
                    </nobr>
                  ))
                : '')}
          </div>
        </div>
      </div>
    </StyledKanjiCard>
  );
};

const StyledKanjiCard = styled(motion.div)`
  width: 200px;
  height: 200px;
  perspective: 600px;
  cursor: pointer;
  .card {
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }
  .cardFace {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .cardFaceFront,
  .cardFaceBack {
    background: white;
    border-radius: 1rem;
    border: 1px #d1d1d1 solid;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .cardFaceBack {
    transform: rotateY(180deg);
  }
  .card.is-flipped {
    transform: rotateY(180deg);
  }
  h1 {
    font-size: 4rem;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .kanji-meanings {
    font-size: 1.2rem;
    padding: 0 1rem;
    display: none;
    animation: showMeaning 0.5s ease-in;
  }

  .kanji-meanings.active {
    display: block;
  }
  .kanjiChara.hide {
    display: none;
  }

  @keyframes showMeaning {
    0% {
      opacity: 0;
    }
    100% {
      opactiy: 1;
    }
  }
`;

export default Kanji;
