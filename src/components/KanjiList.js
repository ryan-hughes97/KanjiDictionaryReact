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
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 501px) and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 651px) and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default KanjiList;
