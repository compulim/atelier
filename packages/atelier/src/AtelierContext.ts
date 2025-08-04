import { createContext } from 'react';
import { object, pipe, readonly, string, tuple, type InferOutput } from 'valibot';

const atelierContextSchema = pipe(
  object({
    packageNameState: pipe(tuple([string()]), readonly()),
    repoNameState: pipe(tuple([string()]), readonly()),
    repoOwnerState: pipe(tuple([string()]), readonly())
  }),
  readonly()
);

type AtelierContextType = InferOutput<typeof atelierContextSchema>;

export default createContext<AtelierContextType>(
  new Proxy({} as AtelierContextType, {
    get() {
      throw new Error('Cannot use hooks outside of <Atelier>');
    }
  })
);

export { atelierContextSchema, type AtelierContextType };
