import Home from 'page/home'
import Note from 'page/Note'
import Redux from 'page/redux/index'
import NoMath from 'page/noMatch'

export const Routes = [
  {
    path: '/note/:type',
    component: Note,
    meta: {
      title: 'Notes',
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
