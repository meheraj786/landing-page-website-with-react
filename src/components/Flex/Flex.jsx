import React from "react";

const Flex = ({children, direction, justify, items, gap}) => {
  return (
    <div
      className={`flex ${direction} justify-${justify} items-${items}`}
      style={{ gap }}
    >
      {children}
    </div>
  )
}

export default Flex;
