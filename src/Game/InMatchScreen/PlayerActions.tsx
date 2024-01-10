import React from 'react';
import { useShallow } from 'zustand/react/shallow';

import { Button, Stack } from '../../UI';
import { backUpAction } from '../actions';
import { useInMatchContext } from './InMatchContext';

export const PlayerActions: React.FC = () => {
  const { wrestler1, wrestler2, updateWrestler1, updateWrestler2 } =
    useInMatchContext(
      useShallow(
        ({ wrestler1, wrestler2, updateWrestler1, updateWrestler2 }) => ({
          wrestler1,
          wrestler2,
          updateWrestler1,
          updateWrestler2,
        })
      )
    );

  return (
    <Stack gap={8}>
      <Button
        onClick={() => {
          const result = backUpAction.onPerform(wrestler1, wrestler2);
          updateWrestler1(result.performer);
          if (result.receiver) {
            updateWrestler2(result.receiver);
          }
        }}
      >
        Back up
      </Button>
      <Button>Kick</Button>
      <Button>Lock up</Button>
      <Button>Run against the ropes</Button>
    </Stack>
  );
};
