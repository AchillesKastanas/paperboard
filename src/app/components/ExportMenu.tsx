import React from 'react';
import { useNotes } from '../store/NotesContext';

const ExportMenu = () => {
  const { exportNotes } = useNotes();

  return (
    <div className="export-menu bg-glass flex-center text-heavy">
      <div
        className="bg-glass w-70 flex items-center justify-center gradient-button"
        onClick={() => exportNotes()}
      >
        Export Notes
      </div>
    </div>
  );
};

export default ExportMenu;
