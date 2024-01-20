export type GameState = 'in-match';

export enum RingPositionX {
  west = -1,
  middle = 0,
  east = 1,
}

export enum RingPositionY {
  south = -1,
  middle = 0,
  north = 1,
}

export enum RingPositionZ {
  floor = -2,
  apron = -1,
  mat = 0,
  corner = 1,
  secondTurnbuckle = 2,
  topTurnbuckle = 3,
}

export type RingPosition = {
  x: RingPositionX;
  y: RingPositionY;
  z: RingPositionZ;
};

export type Wrestler = {
  name: string;
};

export type WrestlerAction = {
  canPerform: (
    performer: WrestlerInMatch,
    receiver?: WrestlerInMatch
  ) => boolean;
  name: string;
  onPerform: (
    performer: WrestlerInMatch,
    receiver?: WrestlerInMatch
  ) => WrestlerActionResult;
};

export type WrestlerActionResult = {
  performer: WrestlerInMatch;
  receiver?: WrestlerInMatch;
};

export type WrestlerInMatch = {
  wrestler: Wrestler;
  health: number;
  isBleeding: boolean;
  posture: WrestlerPosture;
  position: RingPosition;
};

export type WrestlerPosture = 'prone' | 'running' | 'standing';
