import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
// TODO : import로 less파일 추적하능하게 바꾸기
// import '@styles/variables.less';

import wrapper from '@store/configureStore';

const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <title>BoilerPlate</title>
    </Head>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
