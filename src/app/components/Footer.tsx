import React, { ReactElement } from 'react';

interface IFooterProps {
  children: ReactElement;
  className: string;
}

const Footer = ({ children, className }: IFooterProps) => {
  return (
    <div
      className={`
        container-wide
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Footer;
