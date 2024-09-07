import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import localFont from 'next/font/local';
import Footer from '../components/Footer';
import Script from 'next/script';

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
    <html lang='es'>
      <head>
      <Script
      id="gtm"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-WB4T4V2C');`
      }}
      />
      </head>
      <body className={`${museo.variable}  ${tusker.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
