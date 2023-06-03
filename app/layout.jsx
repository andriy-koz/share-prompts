import '@/styles/globals.css'

import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

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

        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
