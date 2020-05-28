import React, { useContext } from 'react';
import { ResponsiveContext } from 'grommet';

const SIZES = ['small', 'medium', 'large'] as const;

type Size = typeof SIZES[number];

type MediaProps = {
  sizes: Size[];
  children: any;
};

type Props = {
  size: Size;
  children: any;
};

const Media = ({ sizes, children }: MediaProps) => {
  const currentSize = useContext(ResponsiveContext) as Size;

  return sizes.includes(currentSize) && children;
};

export const Hide = ({ size, ...rest }: Props) => (
  <Media sizes={SIZES.filter((x) => x !== size)} {...rest} />
);

export const Show = ({ size, ...rest }: Props) => (
  <Media sizes={[size]} {...rest} />
);
