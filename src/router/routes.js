import Home from '../page/home/index';
import Learn from '../page/learn/index'
import Demo from '../page/demo/index'
import NoMath from '../page/noMatch';

export const Routes = [
  {
    path: '/studyNotes',
    component: Learn,
    meta: {
      title: 'Study Notes',
    }
  },
  {
    path: '/codePenDemo',
    component: Demo,
    meta: {
      title: 'CodePen Demo',
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
