import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from '@reducers/user';

// (이전상태, 액션) => 다음 상태를 만들어내는 함수
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      // console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
