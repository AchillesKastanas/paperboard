import '@fontsource/roboto-mono';
import './globals.css';

export const metadata = {
  title: 'Paperboard',
  description: 'A minimalist note-taking app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-['Roboto_Mono'] gradient-background">
        {children}
      </body>
    </html>
  );
}
