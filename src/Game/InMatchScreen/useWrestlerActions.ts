import { useMemo } from 'react';

import { moveWestAction } from '../actions';
import { WrestlerAction, WrestlerInMatch } from '../types';

export function useWrestlerActions(
  wrestler1: WrestlerInMatch,
  wrestler2: WrestlerInMatch
): Array<WrestlerAction> {
  return useMemo(() => {
    const actions: Array<WrestlerAction> = [];

    actions.push(moveWestAction);

    return actions;
  }, []);
}
