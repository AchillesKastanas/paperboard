import React from 'react';
import { useNotes } from '../store/NotesContext';

const ActionMenu = () => {
  const { addNote } = useNotes();

  return (
    <div className="action-menu bg-glass flex-center text-heavy">
      <div
        className="bg-glass w-70 flex items-center justify-center gradient-button pl-5 cursor-pointer"
        onClick={() => addNote()}
      >
        New Note
        <img
          src="/icons/add.png"
          alt="Logo Icon"
          className="w-8 h-8 mr-2 ml-5"
        />
      </div>
    </div>
  );
};

export default ActionMenu;
