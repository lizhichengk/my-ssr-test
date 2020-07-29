import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer} from '../view/Home/store/';
import { reducer as translationReducer} from '../view/Translation/store/';
import { reducer as headerReducer} from '../conpoments/Header/store/';
import clientAxios from '../client/request';
import serverAxios from '../server/request';


const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
});

export const getClintStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}

export const getStore = (req) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}
