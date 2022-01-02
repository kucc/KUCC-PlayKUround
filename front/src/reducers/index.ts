import { CombinedState, combineReducers } from 'redux';

import { HYDRATE } from 'next-redux-wrapper';

import user from '@reducers/user';

// (이전상태, 액션) => 다음 상태를 만들어내는 함수
const rootReducer = (
  state: CombinedState<{ user: never }> | undefined,
  action: { type: any; data: any; error: any; payload: any },
) => {
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
