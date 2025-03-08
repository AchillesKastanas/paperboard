import { createContext, useContext, useState, ReactNode } from 'react';

type TNote = {
  id: number;
  title: string;
  content: string;
};

type TNotesContextType = {
  notes: TNote[];
  addNote: () => void;
  removeNote: (id: number) => void;
  editNote: (id: number, title: string, content: string) => void;
  exportNotes: () => void;
};

const NotesContext = createContext<TNotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<TNote[]>([]);

  const addNote = () => {
    if (notes.length < 10) {
      const newNote = {
        id: Date.now(),
        title: 'Note Title',
        content: 'Type here ...',
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } else {
      console.warn('[WARN]: Reached max note count');
    }
  };

  const removeNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id: number, title: string, content: string) => {
    // console.log('[DEV]: Demonstration of state updates');
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title, content } : note
      )
    );
  };

  const exportNotes = () => {
    // Create a Blob from the notes data
    const notesBlob = new Blob([JSON.stringify(notes, null, 2)], {
      type: 'application/json',
    });

    // Create a link element to download the Blob as a file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(notesBlob);
    link.download = 'notes.json';

    // Programmatically click the link to trigger the download
    link.click();
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, removeNote, editNote, exportNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}
