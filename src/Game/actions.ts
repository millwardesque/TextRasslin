import { cloneDeep } from 'lodash-es';

import { WrestlerAction, WrestlerActionResult, WrestlerInMatch } from './types';

export const backUpAction: WrestlerAction = {
  name: 'Back up',
  onPerform: (
    performer: WrestlerInMatch,
    receiver?: WrestlerInMatch
  ): WrestlerActionResult => {
    const updatedPerformer = cloneDeep(performer);
    const updatedReceiver = cloneDeep(receiver);

    return {
      performer: updatedPerformer,
      receiver: updatedReceiver,
    };
  },
};
