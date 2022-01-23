import { enableES5, produce } from 'immer';

export default (state: any, ...args: [any]) => {
  enableES5();
  return produce(state, ...args);
};
