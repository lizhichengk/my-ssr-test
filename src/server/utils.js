import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

const render = (req, store, routes, context) => {
  const content = renderToString((
    <Provider store = {store}>
      <StaticRouter location={req.path} context={context}>
        <div>
        { renderRoutes(routes) }
        </div>
      </StaticRouter>
    </Provider>
  ));
  const cssStr = context.css.length?context.css.join('\n'):'';
  // const cssStr = '';
  return `
    <html>
      <head>
        <title>hello</title>
        <style>${cssStr}</style>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/index.js'></script>
      </body>
    </html>
  `;
}
export default render