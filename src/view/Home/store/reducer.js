import { CHANGE_HOME_LIST }  from './constants';
const defaultState = {
  name: '哈哈哈',
  newsList : []
};

export default  (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_HOME_LIST:
      return {
        ...state,
        newsList: action.list
      }
    default :
      return state;
  }
}