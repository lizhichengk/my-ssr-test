import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './conpoments/Header/'
import { actions } from './conpoments/Header/store';

const App = (props) => {
  return (
    <div>
      <Header staticContext = { props.staticContext } />
      { renderRoutes(props.route.routes) }
    </div>
  )
}
App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo());
}

export default App;
