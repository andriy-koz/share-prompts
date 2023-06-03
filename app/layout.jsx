import '@/styles/globals.css'

export const metadata = {
  title: 'Promtopia',
  description: 'Discover & Share AI Prompts',
}

export const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'></div>
        <div className='gradient' />

        <main className='app'>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
