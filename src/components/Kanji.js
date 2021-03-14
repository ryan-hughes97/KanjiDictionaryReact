import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

const Kanji = ({ kanjiChara }) => {
  const [kanjiData, setKanjiData] = useState('');
  const kanjiDataHandler = () => {
    axios
      .get(`https://kanjiapi.dev/v1/kanji/${kanjiChara}`)
      .then((data) => setKanjiData(data.data.meanings))
      .catch((err) => console.log(err));
  };
  console.log(kanjiData);

  return (
    <StyledKanjiCard initial='hidden' animate='show' onClick={kanjiDataHandler}>
      <h1>{kanjiChara}</h1>
      <div
        className={kanjiData ? 'kanji-meanings show' : 'kanji-meanings hide'}
        id='kanji-meaning'
      >
        {kanjiData
          ? kanjiData.map((meaning, index) => (
              <nobr key={meaning} style={{ whiteSpace: 'pre-wrap' }}>
                {index ? ', ' : ''}
                {meaning}
              </nobr>
            ))
          : ''}
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
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
`;

export default Kanji;
