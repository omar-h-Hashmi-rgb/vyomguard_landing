import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'VyomGarud - Advanced UAV Systems',
  description: 'Military-grade drone systems with precision engineering and advanced autonomy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-charcoal-950 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}