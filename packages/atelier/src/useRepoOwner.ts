import { useContext } from 'react';
import AtelierContext from './AtelierContext.ts';

export default function useRepoOwner(): readonly [string] {
  return useContext(AtelierContext).repoOwnerState;
}
