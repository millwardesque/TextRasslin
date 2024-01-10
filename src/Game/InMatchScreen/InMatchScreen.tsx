import React, { useState } from 'react';

import { Stack } from '../../UI/Stack';
import {
  RingPositionX,
  RingPositionY,
  RingPositionZ,
  WrestlerInMatch,
} from '../types';
import { PlayerActions } from './PlayerActions';
import { WrestlerStatus } from './WrestlerStatus';

export const InMatchScreen: React.FC = () => {
  const [wrestler1] = useState<WrestlerInMatch>({
    wrestler: {
      name: 'Hulk Hogan',
    },
    health: 100,
    isBleeding: false,
    position: {
      x: RingPositionX.east,
      y: RingPositionY.north,
      z: RingPositionZ.mat,
    },
    posture: 'standing',
  });

  const [wrestler2] = useState<WrestlerInMatch>({
    wrestler: {
      name: 'The Macho Man',
    },
    health: 100,
    isBleeding: false,
    position: {
      x: RingPositionX.middle,
      y: RingPositionY.middle,
      z: RingPositionZ.mat,
    },
    posture: 'standing',
  });

  return (
    <Stack gap={64}>
      <Stack gap={8}>
        <WrestlerStatus wrestler={wrestler1} />
        <WrestlerStatus wrestler={wrestler2} />
      </Stack>
      <PlayerActions />
    </Stack>
  );
};
