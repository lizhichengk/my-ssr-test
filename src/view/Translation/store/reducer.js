import { CHANGE_TRANSLATION_LIST }  from './constants';
const defaultState = {
  translationList : []
};

export default  (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_TRANSLATION_LIST:
      return {
        ...state,
        translationList: action.list
      }
    default :
      return state;
  }
}