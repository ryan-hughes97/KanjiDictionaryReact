import React from 'react';
import Kanji from './Kanji';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const KanjiList = ({ kanji, setKanji, kanjiGrade }) => {
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
