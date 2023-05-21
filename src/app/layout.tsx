import './globals.css'
import { Inter } from 'next/font/google'

import { AuthProvider } from '@/contexts/AuthContext'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Meu Time',
  description: 'Confira tudo sobre ligas e copas ao redor do mundo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
