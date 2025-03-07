import React, { ReactElement } from 'react';

interface IHeaderProps {
  children: ReactElement[];
  className: string;
}

const Header = ({ children, className }: IHeaderProps) => {
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

export default Header;
