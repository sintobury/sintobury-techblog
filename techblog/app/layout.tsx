import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body >
        <Header />
        <main className='content'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
