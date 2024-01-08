export type GameState = 'in-match';

export type RingPositionX = 'east' | 'middle' | 'west';
export type RingPositionY = 'north' | 'middle' | 'south';
export type RingPositionZ =
  | 'floor'
  | 'apron'
  | 'mat'
  | 'corner'
  | 'second-turnbuckle'
  | 'top-turnbuckle';

export type RingPosition = {
  x: RingPositionX;
  y: RingPositionY;
  z: RingPositionZ;
};

export type Wrestler = {
  name: string;
};

export type WrestlerInMatch = {
  wrestler: Wrestler;
  health: number;
  isBleeding: boolean;
  posture: WrestlerPosture;
  position: RingPosition;
};

export type WrestlerPosture = 'prone' | 'running' | 'standing';
