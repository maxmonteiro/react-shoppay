import '@/styles/globals.scss'
import { Provider } from "react-redux";
import store from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import Head from 'next/head'

let persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shoppay</title>
        <meta name="description" content="Shoppay - shopping service online"/>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App;