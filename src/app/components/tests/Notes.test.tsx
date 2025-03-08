import { render, screen } from '@testing-library/react';
import Note from '../Note';
import '@testing-library/jest-dom';

/* 
  Dev note: Could not get jest to work properly. Some config issue is present
*/
jest.mock('../store/NotesContext', () => ({
  useNotes: () => ({
    editNote: jest.fn(),
  }),
}));

describe('Note Component', () => {
  const defaultProps = {
    noteId: 1,
    initialTitle: 'Test Title',
    initialContent: 'Test Content',
    handleButtonClick: jest.fn(),
  };

  it('renders without a problem', () => {
    render(<Note {...defaultProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Delete Note')).toBeInTheDocument();
  });
});
