'use client';

import React from 'react';
import Note from './Note';
import { useNotes } from '../store/NotesContext';

interface INotesGridProps {
  className?: string;
}

const NotesGrid = ({ className = '' }: INotesGridProps) => {
  const { notes, removeNote } = useNotes();

  return (
    <>
      {!notes.length ? (
        <div
          className={`
            flex items-center 
            pl-20 text-heavy 
            text-[8vw]  
            text-transparent 
            bg-clip-text 
            bg-gradient-to-tl
            from-blue-500
            via-blue-200
            to-orange-600  
            ${className}
          `}
        >
          WELCOME TO PAPERBOARD.
        </div>
      ) : (
        <div className={`grid grid-cols-5 grid-rows-2 gap-4 ${className}`}>
          {notes.map((note) => (
            <Note
              key={note.id}
              noteId={note.id}
              initialTitle={note.title}
              initialContent={note.content}
              handleButtonClick={() => removeNote(note.id)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default NotesGrid;
