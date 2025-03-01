import { getDocumentContent } from '../lib/doc';


export default function RootLayout({ children }) {
  const allDocumnets = getDocumentContent()
  console.log(allDocumnets)
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
