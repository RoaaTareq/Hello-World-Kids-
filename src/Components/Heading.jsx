import React from 'react';


const Heading = ({ level, children, className }) => {

  const Tag = `h${level}` || 'h1'; 

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}

Heading.defaultProps = {
  level: 1, };

export default Heading;
