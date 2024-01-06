import React from 'react';
import styled from 'styled-components';

import { useGameStateStore } from './GameStateStore';
import { InMatchScreen } from './InMatchScreen';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px dashed #f00;
  min-width: 600px;
  align-content: center;
`;

export const Game: React.FC = () => {
  const gameState = useGameStateStore((state) => state.state);

  return (
    <GameContainer>
      {gameState === 'in-match' && <InMatchScreen />}
    </GameContainer>
  );
};
