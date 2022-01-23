import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { createWrapper } from 'next-redux-wrapper';

import reducer from '@reducers/index';
import rootSaga from '@sagas/index';

const loggerMiddleware = () => (next: (arg0: any) => any) => (action: any) => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  // const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(sagaMiddleware))
      : composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware));
  const store = createStore(reducer, enhancer) as any;
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
