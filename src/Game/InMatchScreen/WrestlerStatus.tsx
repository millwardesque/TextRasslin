import React from 'react';
import styled from 'styled-components';

import { Stack } from '../../UI/Stack';
import { WrestlerInMatch } from '../types';

type WrestlerStatusProps = {
  wrestler: WrestlerInMatch;
};

const WrestlerStatusWrapper = styled.div<{ $isBleeding: boolean }>`
  background: ${({ $isBleeding }) => ($isBleeding ? 'red' : 'transparent')};
`;

export const WrestlerStatus: React.FC<WrestlerStatusProps> = ({ wrestler }) => {
  return (
    <WrestlerStatusWrapper $isBleeding={wrestler.isBleeding}>
      <Stack direction="horizontal" gap={8}>
        <span>{wrestler.wrestler.name}</span>
        <span>{wrestler.health} / 100</span>
      </Stack>
    </WrestlerStatusWrapper>
  );
};
