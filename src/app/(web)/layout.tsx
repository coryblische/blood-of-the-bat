import { Metadata } from 'next'
import { Pirata_One } from 'next/font/google'

import { absoluteUrl } from '@/lib/utils'
import '@/styles/index.css'

const pirataOne = Pirata_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://blood-of-the-bat.vercel.app/'),
  title: {
    default: 'Blood of the Bat',
    template: '%s | Blood of the Bat'
  },
  description: 'News and Upcoming Shows for Blood of the Bat.',
  openGraph: {
    title: 'Blood of the Bat - A Black Sabbath Cover Band',
    description: 'A blog dedicated to the music and legacy of Black Sabbath.',
    url: absoluteUrl('/'),
    siteName: 'Blood of the Bat',
    images: [
      {
        url: absoluteUrl('/images/og-image.png'),
        width: 1800,
        height: 1600
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon/icon1.png', type: 'image/png' },
      { url: '/favicon/favicon.ico', type: 'image/x-icon' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png' }]
  },
  manifest: '/favicon/manifest.json',
  other: {
    'apple-mobile-web-app-title': 'Blood of the Bat'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={pirataOne.variable}>
      <body className='bg-background text-foreground'>{children}</body>
    </html>
  )
}
