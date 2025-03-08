'use client';

import Header from './components/Header';
import Logo from './components/Logo';
import ActionMenu from './components/ActionMenu';
import NotesGrid from './components/NotesGrid';
import Footer from './components/Footer';
import ExportMenu from './components/ExportMenu';
import { NotesProvider } from './store/NotesContext';

export default function Home() {
  return (
    <NotesProvider>
      <main
        className="
        min-h-screen 
        p-5
        flex
        flex-col
        gap-5
        bg-grid"
      >
        <Header className="flex-1">
          <Logo />
          <ActionMenu />
        </Header>
        <NotesGrid className="flex-20" />
        <Footer className="flex-1">
          <ExportMenu />
        </Footer>
      </main>
    </NotesProvider>
  );
}
