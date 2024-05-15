import React from 'react';
import useDebouncedValue from './useDebouncedValue';

type TPagination<T> = {
  page?: number;
  limit?: number;
  search?: string;
} & T;

export default function useFilters<T>(props: TPagination<T>) {
  const [value, setSearchValue, debouncedValue] = useDebouncedValue();

  const [data, setData] = React.useState<TPagination<T>>({
    ...props,
    page: props?.page || 1,
    limit: props?.limit || 10,
    search: undefined,
  });

  function updateFieldValue(key: keyof TPagination<T>, val: TPagination<T>[keyof TPagination<T>]) {
    if (key === 'search' && typeof val === 'string') {
      setSearchValue(val);
    }

    setData((prevData) => ({
      ...prevData,
      [key]: val,
    }));
  }

  function updateMultipleFieldValues(newData: TPagination<T>) {
    if (Object.keys(newData).includes('search') && typeof newData.search === 'string') {
      setSearchValue(newData.search);
    }
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  }

  function resetFilters() {
    setData({
      page: 1,
      limit: 10,
      ...props,
    });
  }

  function getQueryValues() {
    return {
      ...data,
      search: debouncedValue,
      page: data?.page?.toString() ?? '1',
      limit: data?.limit?.toString() ?? '10',
    };
  }

  return {
    keys: data,
    updateFieldValue,
    resetFilters,
    getQueryValues,
    queryValuesAsString: getQueryValues(),
    searchValue: value,
    updateMultipleFieldValues,
  };
}
