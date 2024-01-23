import React, { FC, ReactNode } from 'react';

interface IComposeContext {
  Components?: FC<{ children?: ReactNode }>[];
  children?: ReactNode | undefined;
}

export default function ComposedContext(
  props: IComposeContext,
) {
  const { Components = [], children } = props;

  return (
      
    <>
      {Components.reduceRight((acc, Comp: FC<any>) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}
