import { useContext } from 'react';
import AtelierContext from './AtelierContext.ts';

export default function useRepoName(): readonly [string] {
  return useContext(AtelierContext).repoNameState;
}
