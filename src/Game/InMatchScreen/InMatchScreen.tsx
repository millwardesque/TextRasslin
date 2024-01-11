import React from 'react';

import { Stack } from '../../UI/Stack';
import {
  RingPositionX,
  RingPositionY,
  RingPositionZ,
  WrestlerInMatch,
} from '../types';
import { InMatchProvider } from './InMatchContext';
import { InMatchHeader } from './InMatchHeader';
import { PlayerActions } from './PlayerActions';
import { RingDisplay } from './RingDisplay';

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
        <RingDisplay />
        <PlayerActions />
      </Stack>
    </InMatchProvider>
  );
};
