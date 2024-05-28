// src/pages/_app.tsx

import { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '@/store/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </I18nextProvider>
  );
};

export default MyApp;
