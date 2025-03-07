import Header from './components/Header';
import Logo from './components/Logo';
import ActionMenu from './components/ActionMenu';
import NotesGrid from './components/NotesGrid';
import Footer from './components/Footer';
import ExportMenu from './components/ExportMenu';

export default function Home() {
  return (
    <main
      className="
        min-h-screen 
        p-5
        flex
        flex-col
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
  );
}
