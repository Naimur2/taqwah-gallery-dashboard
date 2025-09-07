import { Table } from '@mantine/core';
import { nanoid } from '@reduxjs/toolkit';
import { ClassArray, ClassValue } from 'clsx';
import { CSSProperties, ReactNode } from 'react';

import cn from '@/utils/cn';
import getByKeyPath from '@/utils/getKeyByPath';

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
  headerClassName?: ClassValue;
};

type TTableProps<T extends object> = {
  className?: ClassArray;
  style?: CSSProperties;
  data: T[];
  columns: TTable<T>[];
  notFoundTitle?: string;
  notFoundDescription?: string;
};

function TableComponent<T extends object>({
  className,
  style,
  data,
  columns,
  notFoundTitle,
  notFoundDescription,
}: TTableProps<T>) {
  const rows = data.map((item) => (
    <Table.Tr key={nanoid()}>
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
  ));

  return (
    <>
      <div className="flex overflow-x-scroll w-full">
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
          {rows.length > 0 ? <Table.Tbody>{rows}</Table.Tbody> : null}
        </Table>
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
    </>
  );
}

export default TableComponent;
