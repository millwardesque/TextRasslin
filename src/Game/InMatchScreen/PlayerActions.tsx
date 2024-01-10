import React from 'react';

import { Button, Stack } from '../../UI';

export const PlayerActions: React.FC = () => {
  return (
    <Stack gap={8}>
      <Button>Back up</Button>
      <Button>Kick</Button>
      <Button>Lock up</Button>
      <Button>Run against the ropes</Button>
    </Stack>
  );
};
