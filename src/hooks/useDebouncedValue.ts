import { useEffect, useState } from 'react';

type TUseDebouncedValueReturn = [
  string,
  (val: string) => void,
  string | undefined,
];

const useDebouncedValue = (
  defaultValue: string | undefined = '',
  delay: number | undefined = 800,
): TUseDebouncedValueReturn => {
  const [value, setValue] = useState(defaultValue);
  const [debouncedValue, setDebouncedValue] = useState<string | undefined>(
    defaultValue,
  );

  const onChange = (val: string) => setValue(val);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!value) setDebouncedValue(undefined);
      else setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return [value, onChange, debouncedValue];
};

export default useDebouncedValue;
