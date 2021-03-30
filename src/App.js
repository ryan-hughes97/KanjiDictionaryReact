import React from 'react';
import Home from './components/Home';
import styled from 'styled-components';

function App() {
  return (
    <div className='App'>
      <StyledH1>Kanji Flashcards</StyledH1>
      <Home />
    </div>
  );
}

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export default App;
