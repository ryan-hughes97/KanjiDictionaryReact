import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { fade } from '../animation';

const Kanji = ({ kanjiChara }) => {
  const [activeState, setActiveState] = useState(false);
  const [kanjiData, setKanjiData] = useState('');
  const kanjiDataHandler = () => {
    axios
      .get(`https://kanjiapi.dev/v1/kanji/${kanjiChara}`)
      .then((data) => setKanjiData(data.data.meanings))
      .catch((err) => console.log(err));
    setActiveState(!activeState);
  };

  return (
    <StyledKanjiCard
      variants={fade}
      initial='hidden'
      animate='show'
      onClick={kanjiDataHandler}
    >
      <h1>{kanjiChara}</h1>
      <div className={activeState ? 'kanji-meanings active' : 'kanji-meanings'}>
        {kanjiData &&
          (kanjiData
            ? kanjiData.map((meaning, index) => (
                <motion.nobr
                  // variants={fadeMeaning}
                  // initial='hidden'
                  // animate='show'
                  key={meaning}
                  style={{
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {index ? ', ' : ''}
                  {meaning}
                </motion.nobr>
              ))
            : '')}
      </div>
    </StyledKanjiCard>
  );
};

const StyledKanjiCard = styled(motion.div)`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
  cursor: pointer;
  /* position: relative; */
  h1 {
    font-size: 4rem;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .kanji-meanings {
    padding: 0 1rem;
    display: none;
    animation: showMeaning 1s ease-in;
  }
  .kanji-meanings.active {
    display: block;
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
