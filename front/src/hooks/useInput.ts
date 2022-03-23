import { Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnType<T> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

export const useInput = <T extends string>(initialValue: T): ReturnType<T> => {
  const [value, setValue] = useState<T>(initialValue);
  const handler = useCallback(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
