import React, { useState, useEffect } from 'react';
import KanjiList from './KanjiList';
import KanjiGrade from './KanjiGrade';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  let [kanji, setKanji] = useState([]);
  const [kanjiGrade, setKanjiGrade] = useState('1');
  useEffect(() => {
    axios
      .get(`https://kanjiapi.dev/v1/kanji/grade-${kanjiGrade}`)
      .then((data) => {
        setKanji(data.data);
      })
      .catch((err) => console.log(err));
  }, [kanjiGrade]);

  // Randomize Kanji Order
  const randomizekanjiOrder = () => {
    let i = kanji.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = kanji[i];
      kanji[i] = kanji[j];
      kanji[j] = temp;
    }
    let newKanji = kanji;
    kanji = newKanji.map((kanji) => kanji);
    setKanji(kanji);
  };

  return (
    <StyledHome>
      <KanjiGrade
        kanjiGrade={kanjiGrade}
        setKanjiGrade={setKanjiGrade}
        kanji={kanji}
        setKanji={setKanji}
      />
      <h1 style={{ textAlign: 'center' }}>Kanji Grade: {kanjiGrade}</h1>
      <button onClick={randomizekanjiOrder}>
        Shuffle
        <FontAwesomeIcon
          style={{ padding: '0 0 0 .5rem' }}
          className='fa-icon'
          icon={faRandom}
        />
      </button>
      <KanjiList kanji={kanji} setKanji={setKanji} kanjiGrade={kanjiGrade} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    cursor: pointer;
    background: lightblue;
    border: 0;
    border-radius: 1rem;
    padding: 0.75rem 1rem;
    outline: 0;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default Home;
