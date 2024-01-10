import React, { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import {
  InMatchState,
  InMatchStore,
  InMatchStoreProps,
  createInMatchStore,
} from './InMatchStore';

type InMatchContextProps = React.PropsWithChildren<InMatchStoreProps>;

export const InMatchContext = createContext<InMatchStore | null>(null);

export function InMatchProvider({
  children,
  ...storeProps
}: InMatchContextProps): JSX.Element {
  const storeRef = useRef<InMatchStore>();
  if (storeRef.current === undefined) {
    storeRef.current = createInMatchStore(storeProps);
  }

  return (
    <InMatchContext.Provider value={storeRef.current}>
      {children}
    </InMatchContext.Provider>
  );
}

export function useInMatchContext<T>(selector: (state: InMatchState) => T): T {
  const store = useContext(InMatchContext);
  if (!store) {
    throw new Error('Missing InMatchContext.Provider in the tree');
  }

  return useStore(store, selector);
}
