export type GameState = 'in-match';

export type Wrestler = {
  name: string;
};

export type WrestlerInMatch = {
  wrestler: Wrestler;
  health: number;
  isBleeding: boolean;
};
