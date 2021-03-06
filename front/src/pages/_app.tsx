import React, { useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import 'antd/dist/antd.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { AppContextProvider } from '@contexts';
// 패키지 불러오기
import { GlobalStyle } from '@styles';
import { Providers } from '@util';

// TODO : import로 less파일 추적하능하게 바꾸기
require('../styles/variables.less');

const App = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <meta
              charSet='utf-8'
              http-equiv='Content-Security-Policy'
              content='upgrade-insecure-requests'
            />
            <title>PlayKUround</title>
            <script
              type='text/javascript'
              src={`http://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_KEY}`}></script>
          </Head>
          <Providers>
            <GlobalStyle />
            {isMounted && <Component {...pageProps} />}
          </Providers>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </AppContextProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(metric);
}

export default App;
