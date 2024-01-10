import React from 'react';

import { Stack } from '../../UI';
import { useInMatchContext } from './InMatchContext';
import { WrestlerStatus } from './WrestlerStatus';

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
