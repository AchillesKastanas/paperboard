'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useNotes } from '../store/NotesContext';

interface INoteProps {
  noteId: number;
  initialTitle: string;
  initialContent: string;
  handleButtonClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Note = ({
  noteId,
  initialTitle,
  initialContent,
  handleButtonClick,
}: INoteProps) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingContent, setIsEditingContent] = useState(false);
  const { editNote } = useNotes();

  const handleTitleClick = () => setIsEditingTitle(true);
  const handleContentClick = () => setIsEditingContent(true);
  const handleTitleBlur = () => setIsEditingTitle(false);
  const handleContentBlur = () => setIsEditingContent(false);

  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  /* Debounce to avoid constant store updates */
  const debouncedEdit = useCallback(() => {
    editNote(noteId, title, content);
  }, [noteId, title, content, editNote]);

  /* Debounce logic */
  useEffect(() => {
    const handler = setTimeout(() => {
      debouncedEdit();
    }, 500);

    return () => clearTimeout(handler);
  }, [title, content]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className={`bg-glass p-5 shadow-md flex flex-col`}>
      {/* Title */}
      {isEditingTitle ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          className="w-full text-heavy border-b border-gray-300 focus:outline-none flex-1"
          autoFocus
        />
      ) : (
        <h2
          className="text-heavy cursor-pointer hover:text-gray-700 flex-1"
          onClick={handleTitleClick}
        >
          {title}
        </h2>
      )}

      {/* Content */}
      {isEditingContent ? (
        <textarea
          value={content}
          onChange={handleContentChange}
          onBlur={handleContentBlur}
          className="w-full h-70 mt-2 text-small bg-transparent border-b border-gray-300 flex-5"
          autoFocus
        />
      ) : (
        <p
          className="text-small mt-2 cursor-pointer hover:text-gray-700 text-wrap flex-5"
          onClick={handleContentClick}
        >
          {content}
        </p>
      )}

      {/* Delete Button */}
      <div
        className="bg-glass text-med flex items-center justify-center flex-1 cursor-pointer"
        onClick={handleButtonClick}
      >
        Delete Note
        <img
          src="/icons/delete.png"
          alt="Logo Icon"
          className="w-8 h-8 mr-2 ml-5"
        />
      </div>
    </div>
  );
};

export default Note;
