import React from 'react';

const Flex = ({ className, children }) => {
  return <div className={`flex items-center flex-wrap ${className}`}>{children}</div>;
};

export default Flex;

