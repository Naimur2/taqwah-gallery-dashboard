import { Checkbox } from '@mantine/core';
import { useContext } from 'react';
import { TBlItemSelectCtx } from '../TableItemSelectCtx';

export default function TableItemSelect({ id }: { id: string }) {
  const { selectedItems, setSelectedItem } = useContext(TBlItemSelectCtx);
  return (
    <Checkbox
      value={id}
      onChange={(event) => setSelectedItem(event.currentTarget.value)}
      checked={selectedItems.includes(id)}
      className="!w-[50px]"
    />
  );
}
