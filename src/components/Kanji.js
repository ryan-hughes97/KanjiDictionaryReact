import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { fade } from '../animation';

const Kanji = ({ kanjiChara }) => {
  const [flipState, setFlipState] = useState(false);
  const [kanjiData, setKanjiData] = useState('');
  const kanjiDataHandler = () => {
    axios
      .get(`https://kanjiapi.dev/v1/kanji/${kanjiChara}`)
      .then((data) => setKanjiData(data.data.meanings))
      .catch((err) => console.log(err));
    setFlipState(!flipState);
  };

  return (
    <StyledKanjiCard
      variants={fade}
      initial='hidden'
      animate='show'
      onClick={kanjiDataHandler}
    >
      <div className={flipState ? 'card isFlipped' : 'card'}>
        <div className='cardFace cardFaceFront'>
          <h1>{kanjiChara}</h1>
        </div>
        <div className='cardFace cardFaceBack'>
          <div className='kanjiMeanings'>
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
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
  .card.isFlipped {
    transform: rotateY(180deg);
  }
  h1 {
    font-size: 4rem;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .kanjiMeanings {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

export default Kanji;
