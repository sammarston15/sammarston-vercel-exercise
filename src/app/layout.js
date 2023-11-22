import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '600', '700', '800', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Sam Marston\'s Vercel Exercise',
  description: 'NextJS app showcasing Sam Marston\'s answers to the take home exercise.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
