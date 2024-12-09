import './globals.css'
export const metadata = {
  title: 'GenUI React',
  description: 'A modern React application with dark mode support',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jost:ital,wght@0,100..900;1,100..900&family=Karla:ital,wght@0,200..800;1,200..800&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Montserrat+Underline:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playwrite+HR+Lijeva:wght@100..400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-100 dark:bg-zinc-900 antialiased">
        {children}
      </body>
    </html>
  )
}