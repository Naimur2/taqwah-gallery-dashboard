import React from 'react';

type TBlItemSelectCtx = {
  selectedItems: string[];
  setSelectedItem: (items: string) => void;
};

export const TBlItemSelectCtx = React.createContext<TBlItemSelectCtx>({
  selectedItems: [],
  setSelectedItem: () => {},
});

type TTableItemSelectCtx = {
  children: React.ReactNode;
  items: string[];
  setItem: (items: string) => void;
};

export default function TableItemSelectCtx({ children, items, setItem }: TTableItemSelectCtx) {
  const value = React.useMemo(
    () => ({ selectedItems: items, setSelectedItem: setItem }),
    [items, setItem]
  );
  return <TBlItemSelectCtx.Provider value={value}>{children}</TBlItemSelectCtx.Provider>;
}
