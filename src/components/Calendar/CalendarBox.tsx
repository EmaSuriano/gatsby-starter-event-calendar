import React, { useContext, ReactNode } from 'react';
import { Box, ResponsiveContext, BoxProps } from 'grommet';
import styled from 'styled-components';

type Props = BoxProps & {
  square?: boolean;
  children?: ReactNode;
};

const CalendarBox = ({ square, children, ...rest }: Props) => {
  const size = useContext(ResponsiveContext);

  return (
    <StyledBox
      square={square && size !== 'small'}
      width="calc(100% / 7)"
      fill={size === 'small' ? 'horizontal' : 'vertical'}
      {...rest}
    >
      {children}
    </StyledBox>
  );
};

const StyledBox = styled(Box)<Props>`
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  height: ${(props) => (props.square ? '8rem' : 'inherit')};
  position: relative;
`;

export default CalendarBox;
