import { useContext } from 'react';
import AtelierContext from './AtelierContext.ts';

export default function usePackageName(): readonly [string] {
  return useContext(AtelierContext).packageNameState;
}
