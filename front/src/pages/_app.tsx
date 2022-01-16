import React from 'react';

import 'antd/dist/antd.css';
import Head from 'next/head';
import PropTypes from 'prop-types';

import wrapper from '@store/configureStore';
import { GlobalStyle } from '@styles';

// TODO : import로 less파일 추적하능하게 바꾸기
require('../styles/variables.less');

const App = ({ Component }: any) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <title>BoilerPlate</title>
    </Head>
    <GlobalStyle />
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
