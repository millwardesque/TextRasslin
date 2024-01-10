import { cloneDeep } from 'lodash-es';

import { getDirection, movePositionByDirection } from './InMatchScreen/utils';
import { WrestlerAction, WrestlerActionResult, WrestlerInMatch } from './types';

export const backUpAction: WrestlerAction = {
  name: 'Back up',
  onPerform: (
    performer: WrestlerInMatch,
    receiver?: WrestlerInMatch
  ): WrestlerActionResult => {
    const clonedPerformer = cloneDeep(performer);
    const clonedReceiver = cloneDeep(receiver);
    if (receiver === undefined) {
      return {
        performer: clonedPerformer,
        receiver: clonedReceiver,
      };
    }

    const directionToOpponent = getDirection(
      performer.position,
      receiver.position
    );

    const lateralDirectionToOpponent = {
      ...directionToOpponent,
      z: 0,
    };

    // @TODO @DEBUG HANDLE ZERO DIRECTION CASE. THIS IS A PLACEHOLDER
    if (
      lateralDirectionToOpponent.x === 0 &&
      lateralDirectionToOpponent.y === 0
    ) {
      lateralDirectionToOpponent.y = 1;
    }

    const newPosition = movePositionByDirection(
      performer.position,
      lateralDirectionToOpponent
    );

    return {
      performer: { ...clonedPerformer, position: newPosition },
      receiver: clonedReceiver,
    };
  },
};
