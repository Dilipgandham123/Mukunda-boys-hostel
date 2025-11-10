import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimationHandler from '@/components/ScrollAnimationHandler'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mukunda Boys Hostel',
  description: 'Colorful, safe and comfortable accommodation for women',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ScrollAnimationHandler />
        {children}
        <Footer />
      </body>
    </html>
  )
}