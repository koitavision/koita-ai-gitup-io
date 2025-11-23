export const metadata = {
  title: 'Mistral AI Chat',
  description: 'Assistant IA moderne avec Mistral',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
