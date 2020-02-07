import Home from 'page/home'
import Note from 'page/Note'
import Demo from 'page/demo'
import Redux from 'page/redux/index'
import NoMath from 'page/noMatch'
import Api from 'page/api'

export const Routes = [
  {
    path: '/note/:type',
    component: Note,
    meta: {
      title: 'Notes',
    }
  },
  {
    path: '/demo/:type',
    component: Demo,
    meta: {
      title: 'CodePen',
    }
  },
  {
    path: '/redux',
    component: Redux,
    meta: {
      title: 'React Redux Demo',
    }
  },
  {
    path: '/api',
    component: Api,
    meta: {
      title: 'API Demo',
    }
  },
  {
    path: '/',
    component: Home,
    exact: true,
    meta: {
      title: 'Learn React',
    }
  },
  {
    path: '*',
    component: NoMath,
    meta: {
      title: '404',
    }
  }
]
