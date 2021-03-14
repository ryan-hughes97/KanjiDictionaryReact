import React, { useRef } from 'react';
import styled from 'styled-components';

const KanjiGrade = ({ kanjiGrade, setKanjiGrade }) => {
  const buttonEl1 = useRef(null);
  const buttonEl2 = useRef(null);
  const buttonEl3 = useRef(null);
  const buttonEl4 = useRef(null);
  const buttonEl5 = useRef(null);
  const buttonEl6 = useRef(null);
  const buttonEl7 = useRef(null);
  const buttonEl8 = useRef(null);

  const kanjiGradeHandler1 = () => {
    setKanjiGrade('1');
  };
  const kanjiGradeHandler2 = () => {
    setKanjiGrade('2');
  };
  const kanjiGradeHandler3 = () => {
    setKanjiGrade('3');
  };
  const kanjiGradeHandler4 = () => {
    setKanjiGrade('4');
  };
  const kanjiGradeHandler5 = () => {
    setKanjiGrade('5');
  };
  const kanjiGradeHandler6 = () => {
    setKanjiGrade('6');
  };
  const kanjiGradeHandler7 = () => {
    setKanjiGrade('7');
  };
  const kanjiGradeHandler8 = () => {
    setKanjiGrade('8');
  };
  return (
    <StyledGrade>
      <h1>Choose a Grade:</h1>
      <ul>
        <li>
          <button ref={buttonEl1} onClick={kanjiGradeHandler1}>
            1
          </button>
        </li>
        <li>
          <button ref={buttonEl2} onClick={kanjiGradeHandler2}>
            2
          </button>
        </li>
        <li>
          <button ref={buttonEl3} onClick={kanjiGradeHandler3}>
            3
          </button>
        </li>
        <li>
          <button ref={buttonEl4} onClick={kanjiGradeHandler4}>
            4
          </button>
        </li>
        <li>
          <button ref={buttonEl5} onClick={kanjiGradeHandler5}>
            5
          </button>
        </li>
        <li>
          <button ref={buttonEl6} onClick={kanjiGradeHandler6}>
            6
          </button>
        </li>
        <li>
          <button ref={buttonEl7} onClick={kanjiGradeHandler7}>
            7
          </button>
        </li>
        <li>
          <button ref={buttonEl8} onClick={kanjiGradeHandler8}>
            8
          </button>
        </li>
      </ul>
    </StyledGrade>
  );
};

const StyledGrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin: 1rem;
      button {
        background: lightblue;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 0;
        outline: 0;
      }
    }
  }
`;

export default KanjiGrade;
