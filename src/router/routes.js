import Home from 'page/home'
import studyNotes from 'page/studyNotes'
import reactDemo from 'page/reactDemo'
import reactReduxDemo from 'page/reactReduxDemo/index'
import NoMath from 'page/noMatch'

export const Routes = [
  {
    path: '/studyNotes',
    component: studyNotes,
    meta: {
      title: 'Study Notes',
    }
  },
  {
    path: '/reactDemo',
    component: reactDemo,
    meta: {
      title: 'React Demo',
    }
  },
  {
    path: '/reactReduxDemo',
    component: reactReduxDemo,
    meta: {
      title: 'React Redux Demo',
    }
  },
  {
    path: '/',
    component: Home,
    exact: true,
    meta: {
      title: 'Home',
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
