import { LoadingOverlay, Portal, Table } from '@mantine/core';
import { nanoid } from '@reduxjs/toolkit';
import { ClassArray, ClassValue } from 'clsx';
import { CSSProperties, ReactNode } from 'react';

import cn from '@/utils/cn';
import getByKeyPath from '@/utils/getKeyByPath';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { useListState } from '@mantine/hooks';
import { useUpdateCategoriesSequnceMutation } from '@/store/apis/categoris';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TTable<T extends object> = {
  label: string;
  component?: (item: T) => ReactNode;
  className?: ClassValue;
  style?: CSSProperties;
  accessor?: NestedKeyOf<T>;
  prefix?: string;
  postfix?: string;
  textClassName?: ClassValue;
  textStyle?: CSSProperties;
  emptyValue?: string;
};

type TTableProps<
  T extends {
    position?: number;
  },
> = {
  className?: ClassArray;
  style?: CSSProperties;
  data: T[];
  columns: TTable<T>[];
  notFoundTitle?: string;
  notFoundDescription?: string;
};

function CategoriesTable<T extends object>({
  className,
  style,
  data,
  columns,
  notFoundTitle,
  notFoundDescription,
}: TTableProps<T & { position?: number; _id: string }>) {
  const [state, handlers] = useListState(data);

  const [updateCategoriesSequence, updateCategoriesSequenceRes] =
    useUpdateCategoriesSequnceMutation();

  const rows = state.map((item, index) => (
    <Draggable
      key={nanoid()}
      index={index}
      draggableId={item.position ? item.position.toString() : ''}
    >
      {(provided, snapshot) => (
        <Table.Tr
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={cn({
            'bg-white hover:bg-gray-50': !snapshot.isDragging,
            'bg-gray-100': snapshot.isDragging,
          })}
        >
          {columns.map((column) => (
            <Table.Td
              key={nanoid()}
              className={cn('px-4 py-3 capitalize min-w-48', column?.className)}
              style={column?.style}
            >
              {/* @ts-ignore */}
              {column.component ? (
                column.component(item)
              ) : (
                <p className={cn(column?.textClassName)} style={column?.textStyle}>
                  {column?.prefix}{' '}
                  {getByKeyPath(item, column.accessor as string) ?? column?.emptyValue ?? ''}{' '}
                  {column?.postfix}
                </p>
              )}
            </Table.Td>
          ))}
        </Table.Tr>
      )}
    </Draggable>
  ));

  return (
    <>
      <div className="flex overflow-x-scroll w-full">
        <DragDropContext
          onDragEnd={async ({ destination, source }) => {
            // want to store positions in the server so we need to update the state
            if (!destination) return;
            handlers.reorder({ from: source.index, to: destination?.index || 0 });

            // Create new ordered list to send to server
            const reordered = [...state];
            const [movedItem] = reordered.splice(source.index, 1);
            reordered.splice(destination.index, 0, movedItem);

            // Assign new positions
            const updatedWithPositions = reordered.map((item, idx) => ({
              ...item,
              position: idx + 1, // assuming position starts at 1
            }));

            try {
              await updateCategoriesSequence({
                categories: updatedWithPositions.map((item) => ({
                  id: item._id,
                  position: item.position,
                })),
              }).unwrap();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Table className={cn(className)} style={style}>
            <Table.Thead>
              <Table.Tr>
                {columns.map((item) => (
                  <Table.Th className="font-medium text-sm px-4 py-3" key={nanoid()}>
                    {item.label}
                  </Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>

            {rows.length > 0 ? (
              <Droppable droppableId="dnd-list" direction="vertical">
                {(provided) => (
                  <Table.Tbody {...provided.droppableProps} ref={provided.innerRef}>
                    {rows}
                    {provided.placeholder}
                  </Table.Tbody>
                )}
              </Droppable>
            ) : null}
          </Table>
        </DragDropContext>
      </div>
      {rows.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-full w-full py-10 gap-3">
          <p className=" text-xs md:text-sm font-semibold text-center">
            {notFoundTitle || 'No data found'}
          </p>
          {notFoundDescription && (
            <p className="text-xs md:text-sm text-center">{notFoundDescription}</p>
          )}
        </div>
      ) : null}
      <Portal>
        <LoadingOverlay visible={updateCategoriesSequenceRes.isLoading} />
      </Portal>
    </>
  );
}

export default CategoriesTable;
