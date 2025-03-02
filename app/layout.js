import Header from '../components/header';
import { getDocumentContent } from '../lib/doc';


export default function RootLayout({ children }) {
  const allDocumnets = getDocumentContent()
  console.log(allDocumnets)
  return (
    <html lang="en">
      <body>
        <Header>
        {children}
        </Header>
      </body>
    </html>
  );
}
