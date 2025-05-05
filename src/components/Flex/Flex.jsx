import React from 'react';

const Flex = ({
  children,
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  gap = '0',
  wrap = 'nowrap',
  style = {},
  ...props
}) => {
  const flexStyles = {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    flexWrap: wrap,
    ...style,
  };

  return (
    <div style={flexStyles} {...props}>
      {children}
    </div>
  );
};

export default Flex;