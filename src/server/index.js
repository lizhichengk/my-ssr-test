import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import render from './utils';
import { getStore } from '../store'
import routes from '../Routes';

const app = express();
const port = 8888;

app.use(express.static('public'));

app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: function(req) {
    return '/ssr/api'+ req.url;
  }
}))

app.get('*', (req, res) => {
  const store = getStore(req);
  const promises = [];
  const matchedRoutes = matchRoutes(routes, req.path);
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((reslove, reject) => {
        item.route.loadData(store).then(reslove).catch(reslove);
      })
      promises.push(promise);
    }
  })

  Promise.all(promises).then(() => {
    const context = {
      css: []
    };
    const html = render(req, store, routes, context);
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.NotFound) {
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  })
});
app.listen(port, () => {
  console.log(`express is runing`);
});