import Home from 'src/page/home'
import Note from 'src/page/Note'
import Redux from 'src/page/redux/index'
import NoMath from 'src/page/noMatch'

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
