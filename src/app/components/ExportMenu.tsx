import React from 'react';
import { useNotes } from '../store/NotesContext';

const ExportMenu = () => {
  const { exportNotes } = useNotes();

  return (
    <div className="export-menu bg-glass flex-center text-heavy">
      <div
        className="bg-glass w-90 flex items-center justify-center gradient-button pl-5 cursor-pointer"
        onClick={() => exportNotes()}
      >
        Export Notes
        <img
          src="/icons/export.png"
          alt="Logo Icon"
          className="w-8 h-8 mr-2 ml-5"
        />
      </div>
    </div>
  );
};

export default ExportMenu;
