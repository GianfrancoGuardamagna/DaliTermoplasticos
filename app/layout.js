import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import localFont from 'next/font/local';
import Footer from '../components/Footer';
import { GoogleTagManager } from '@next/third-parties/google'

const museo = localFont({
  src: '../public/fonts/Museo.ttf',
  variable: '--font-museo',
});

const tusker = localFont({
  src: '../public/fonts/Tusker.ttf',
  variable: '--font-tusker',
});

export const metadata = {
  title: 'Fep Envases Plasticos',
  description: 'Fep Envases Plasticos',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${museo.variable}  ${tusker.variable}`}>
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId='GTM-WB4T4V2C'/>
    </html>
  );
}
