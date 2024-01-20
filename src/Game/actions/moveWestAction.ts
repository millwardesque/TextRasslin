import { cloneDeep } from 'lodash-es';

import { movePositionByDirection } from '../InMatchScreen/utils';
import {
  RingPositionX,
  RingPositionY,
  RingPositionZ,
  WrestlerAction,
  WrestlerActionResult,
  WrestlerInMatch,
} from '../types';

export const moveWestAction: WrestlerAction = {
  canPerform: (
    performer: WrestlerInMatch,
    receiver?: WrestlerInMatch
  ): boolean => {
    const { x: performerX, y: performerY, z: performerZ } = performer.position;
    if (performerX === RingPositionX.west) {
      return false;
    }

    return true;
  },
  name: 'Move west',
  onPerform: (
    performer: WrestlerInMatch,
    receiver?: WrestlerInMatch
  ): WrestlerActionResult => {
    const clonedPerformer = cloneDeep(performer);
    const clonedReceiver = cloneDeep(receiver);

    const newPosition = movePositionByDirection(performer.position, {
      x: RingPositionX.west,
      y: 0,
      z: 0,
    });

    return {
      performer: { ...clonedPerformer, position: newPosition },
      receiver: clonedReceiver,
    };
  },
};
