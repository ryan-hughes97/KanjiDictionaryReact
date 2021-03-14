import React, { useState, useEffect } from 'react';
import KanjiList from './KanjiList';
import KanjiGrade from './KanjiGrade';
import axios from 'axios';

const Home = () => {
  const [kanjiGrade, setKanjiGrade] = useState('1');
  const [kanji, setKanji] = useState([]);
  useEffect(() => {
    axios
      .get(`https://kanjiapi.dev/v1/kanji/grade-${kanjiGrade}`)
      .then((data) => {
        setKanji(data.data);
      })
      .catch((err) => console.log(err));
  }, [kanjiGrade]);
  return (
    <div>
      <KanjiGrade kanjiGrade={kanjiGrade} setKanjiGrade={setKanjiGrade} />
      <h1 style={{ textAlign: 'center' }}>Kanji Grade: {kanjiGrade}</h1>
      <KanjiList kanji={kanji} setKanji={setKanji} kanjiGrade={kanjiGrade} />
    </div>
  );
};

export default Home;
