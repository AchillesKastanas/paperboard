import React from 'react';

interface INotesGridProps {
  className: string;
}

const NotesGrid = ({ className }: INotesGridProps) => {
  return (
    <div
      className={`
        ${className}  
      `}
    >
      GRID
    </div>
  );
};

export default NotesGrid;
