import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Coffee Stack Innovations - Bring Your Idea to Reality</title>
        <link rel="icon" href="/assets/images/logo-bg.png" />
      </head>
        <body>
            <div className="container">
                <Navbar />
                {children}
                <Footer />
            </div>
        </body>
    </html>
  )
}

export default RootLayout