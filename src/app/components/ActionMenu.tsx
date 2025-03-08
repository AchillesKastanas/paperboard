import React from 'react';
import { useNotes } from '../store/NotesContext';

const ActionMenu = () => {
  const { addNote } = useNotes();

  return (
    <div className="action-menu bg-glass flex-center text-heavy">
      <div
        className="bg-glass w-50 flex items-center justify-center gradient-button"
        onClick={() => addNote()}
      >
        New Note
      </div>
    </div>
  );
};

export default ActionMenu;
