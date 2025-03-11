import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    // 언어 감지 및 설정
    const detectedLang = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(detectedLang);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp; 