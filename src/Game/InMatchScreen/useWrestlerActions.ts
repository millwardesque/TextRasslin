import { useMemo } from 'react';

import { backUpAction } from '../actions';
import { WrestlerAction, WrestlerInMatch } from '../types';

export function useWrestlerActions(
  wrestler1: WrestlerInMatch,
  wrestler2: WrestlerInMatch
): Array<WrestlerAction> {
  return useMemo(() => {
    const actions: Array<WrestlerAction> = [];

    actions.push(backUpAction);

    return actions;
  }, []);
}
