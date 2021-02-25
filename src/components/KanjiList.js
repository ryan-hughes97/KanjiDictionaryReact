import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Kanji from './Kanji';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const KanjiList = () => {
  const [kanji, setKanji] = useState([]);
  useEffect(() => {
    axios
      .get('https://kanjiapi.dev/v1/kanji/grade-1')
      .then((data) => {
        setKanji(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledKanjiList>
      {kanji.map((data) => (
        <Kanji kanjiChara={data} key={data} />
      ))}
    </StyledKanjiList>
  );
};

const StyledKanjiList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1000px;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export default KanjiList;
