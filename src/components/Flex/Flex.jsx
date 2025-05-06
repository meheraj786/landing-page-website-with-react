import React from 'react';

const Flex = ({
  children,
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  gap = '0',
  wrap = 'wrap',
  ...props
}) => {
  const flexStyles = {
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    flexWrap: wrap,
  };

  return (
    <div style={flexStyles} {...props}>
      {children}
    </div>
  );
};

export default Flex;