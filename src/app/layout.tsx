import './globals.css'

export const metadata = {
  title: 'Modern Login Page | AsmrProg',
  description: 'A modern login page with sign-up functionality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}

