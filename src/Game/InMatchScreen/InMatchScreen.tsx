import React, { useState } from 'react';

import { Stack } from '../../UI/Stack';
import {
  RingPositionX,
  RingPositionY,
  RingPositionZ,
  WrestlerInMatch,
} from '../types';
import { InMatchProvider, useInMatchContext } from './InMatchContext';
import { PlayerActions } from './PlayerActions';
import { WrestlerStatus } from './WrestlerStatus';

const WRESTLER1: WrestlerInMatch = {
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
};

const WRESTLER2: WrestlerInMatch = {
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
};

export const InMatchScreen: React.FC = () => {
  return (
    <InMatchProvider wrestler1={WRESTLER1} wrestler2={WRESTLER2}>
      <Stack gap={64}>
        <InMatchHeader />
        <PlayerActions />
      </Stack>
    </InMatchProvider>
  );
};

export const InMatchHeader: React.FC = () => {
  const wrestler1 = useInMatchContext((state) => state.wrestler1);
  const wrestler2 = useInMatchContext((state) => state.wrestler2);

  return (
    <Stack gap={8}>
      <WrestlerStatus wrestler={wrestler1} />
      <WrestlerStatus wrestler={wrestler2} />
    </Stack>
  );
};
