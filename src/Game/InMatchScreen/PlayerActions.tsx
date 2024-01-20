import React from 'react';
import { useShallow } from 'zustand/react/shallow';

import { Button, Stack } from '../../UI';
import { backUpAction } from '../actions';
import { useInMatchContext } from './InMatchContext';
import { useWrestlerActions } from './useWrestlerActions';

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

  const actions = useWrestlerActions(wrestler1, wrestler2);

  const buttons = actions.map((action) => (
    <Button
      key={action.name}
      onClick={() => {
        const result = action.onPerform(wrestler1, wrestler2);
        updateWrestler1(result.performer);
        if (result.receiver) {
          updateWrestler2(result.receiver);
        }
      }}
    >
      {action.name}
    </Button>
  ));

  return <Stack gap={8}>{buttons}</Stack>;
};
