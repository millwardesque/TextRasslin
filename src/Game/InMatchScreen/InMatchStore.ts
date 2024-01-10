import { StoreApi, createStore } from 'zustand';

import { WrestlerInMatch } from '../types';

export type InMatchStoreProps = {
  wrestler1: WrestlerInMatch;
  wrestler2: WrestlerInMatch;
};

export type InMatchState = InMatchStoreProps & {
  updateWrestler1: (newWrestler: WrestlerInMatch) => void;
  updateWrestler2: (newWrestler: WrestlerInMatch) => void;
};

export type InMatchStore = ReturnType<typeof createInMatchStore>;

export function createInMatchStore(
  initialProps: InMatchStoreProps
): StoreApi<InMatchState> {
  return createStore<InMatchState>()((set) => ({
    ...initialProps,
    updateWrestler1: (newWrestler: WrestlerInMatch) =>
      set(() => ({ wrestler1: newWrestler })),
    updateWrestler2: (newWrestler: WrestlerInMatch) =>
      set(() => ({ wrestler2: newWrestler })),
  }));
}
