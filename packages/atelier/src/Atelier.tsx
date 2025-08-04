import React, { memo, useMemo } from 'react';
import { object, parse, pipe, readonly, string, type InferInput } from 'valibot';
import AtelierContext, { atelierContextSchema, type AtelierContextType } from './AtelierContext.ts';
import Layout from './Layout.tsx';

const atelierPropsSchema = pipe(
  object({
    packageName: string(),
    repoName: string(),
    repoOwner: string()
  }),
  readonly()
);

type AtelierProps = InferInput<typeof atelierPropsSchema>;

const Atelier = memo(function Atelier(props: AtelierProps) {
  const { packageName, repoName, repoOwner } = parse(atelierPropsSchema, props);

  const context = useMemo<AtelierContextType>(
    () =>
      parse(atelierContextSchema, {
        packageNameState: Object.freeze([packageName]),
        repoNameState: Object.freeze([repoName]),
        repoOwnerState: Object.freeze([repoOwner])
      }),
    [packageName, repoName, repoOwner]
  );

  return (
    <AtelierContext.Provider value={context}>
      <Layout />
    </AtelierContext.Provider>
  );
});

export default Atelier;
export { atelierPropsSchema, type AtelierProps };
