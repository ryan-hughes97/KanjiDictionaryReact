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
    <StyledKanjiCard onClick={kanjiDataHandler}>
      <h1>{kanjiChara}</h1>
      <div className='kanji-meanings'>
        {kanjiData
          ? kanjiData.map((meaning) => <p key={meaning}>{meaning}</p>)
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
  /* position: relative; */
  h1 {
    font-size: 4rem;
    padding: 0;
    margin: 0;
    text-align: center;
  }
  .kanji-meanings {
    /* position: absolute;
    top: 0;
    left: 0; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: flex-end;
    padding: 1rem;
    p {
      background: #ccc;
      width: 75px;
      margin: 0.3rem 0.3rem;
      text-align: center;
      border-radius: 10px;
    }
  }
`;

export default Kanji;
