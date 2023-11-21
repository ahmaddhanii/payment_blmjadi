// _app.js

import '../styles/globals.css'; // Mengimpor file global styling
import 'tailwindcss/tailwind.css'; // Mengimpor Tailwind CSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
