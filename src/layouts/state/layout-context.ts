import React from 'react';

const state = {
  isSidebarOpen: false,
};

export type TAction = {
  type: string;
  payload?: any;
};

export type TContext = {
  state: typeof state;
  dispatch: React.Dispatch<TAction>;
};

const LayoutContext = React.createContext<TContext>({
  state,
  dispatch: () => {},
});

export default LayoutContext;
