import React, { useReducer } from 'react';
import { TOGGLE_SIDEBAR } from './layout-actions';
import LayoutContext, { TAction } from './layout-context';

const initialState = {
  isSidebarOpen: false,
};

type State = typeof initialState;

const reducer = (state: State, action: TAction) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }

  return state;
};

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
