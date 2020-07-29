import App from './app';
import Home from './view/Home'
import NotFound from './view/Notfound'
import Translation from './view/Translation'

export default [
  {
    path: '/',
    component: App,
    key: 'app',
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home',
        routes: [
          {
            path: '/aaa',
            component: Home,
            exact: true,
            loadData: Home.loadData,
            key: 'home',
          }
        ]
      },
      {
        path: '/translation',
        component: Translation,
        exact: true,
        key: 'translation',
        loadData: Translation.loadData
      },
      {
        component: NotFound,
        key: 'notfound'
      }
    ]
  }
]