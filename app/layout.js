import { getDocumentContent } from '../lib/doc';


export default function RootLayout({ children }) {
  const allDocumnets = getDocumentContent()
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
