import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { getClintStore } from '../store'
import routes from '../Routes';

const store = getClintStore();

const App = () => {
  return (
    <Provider store= {store}>
      <BrowserRouter>
        <div>
        { renderRoutes(routes) }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'));