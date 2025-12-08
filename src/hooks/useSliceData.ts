// hooks/useSliceData.ts
import { RootState } from '@/store';
import { useSelector } from 'react-redux';


type SliceWithData<T = any> = {
  data?: T;
  error?: any;
};

function hasDataAndError(slice: any): slice is SliceWithData {
  return slice && 'data' in slice && 'error' in slice;
}

export function useSliceData<K extends keyof RootState>(statekey: K) {
  const slice = useSelector((state: RootState) => state[statekey]);

  if (hasDataAndError(slice)) {
    return {
      data: slice.data,
      error: slice.error,
    };
  }

  return { data: undefined, error: undefined };
}
