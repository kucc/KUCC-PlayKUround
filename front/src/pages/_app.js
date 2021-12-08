import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { GlobalStyle } from '@styles';
import 'antd/dist/antd.css';
// TODO : import로 less파일 추적하능하게 바꾸기
require('../styles/variables.less');

import wrapper from '@store/configureStore';

const App = ({ Component }) => (
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
