export const NoteList = [
  {
    id: 'React',
    title: 'React@16.12.0',
  },
  {
    id: 'Create-React-App',
    title: 'Create-React-App@3.3.0',
  },
  {
    id: 'React-Router',
    title: 'React-Router@5.1.2',
  },
  {
    id: 'React-Redux',
    title: 'React-Redux@7.1.3'
  },
  {
    id: 'React-Redux-Demo',
    title: 'React-Redux-Demo@7.1.3'
  }
]

export const codepenURL = (id) => `https://codepen.io/babytutu/embed/${id}?default-tab=js,result`

export const codepenList = [
  {
    id: 'bGNPPVL',
    title: 'JSX',
  },
  {
    id: 'povXXzO',
    title: 'Component & Props',
  },
  {
    id: 'NWPZZNM',
    title: 'State and Lifecycle',
  },
  {
    id: 'GRgbbrv',
    title: 'Handling Events',
  },
  {
    id: 'PowrrQR',
    title: 'Conditional Rendering',
  },
  {
    id: 'XWJLLPm',
    title: 'Lists and Keys',
  },
  {
    id: 'WNbqqPm',
    title: 'Forms',
  },
  {
    id: 'bGNXwQN',
    title: 'Refs and the DOM',
  },
  {
    id: 'povMdLG',
    title: 'RenderHtml',
  },
  {
    id: 'ZEYgvzY',
    title: 'HOOK-useState',
  },
  {
    id: 'ExaqQaE',
    title: 'HOOK-useEffect',
  },
]

export const menuList = [
  {
    title: 'CodePen',
    path: '/demo/',
    children: codepenList
  },
  {
    title: 'Notes',
    path: '/note/',
    children: NoteList
  },
  {
    title: 'Demos',
    path: '/',
    children: [
      {
        id: 'redux',
        title: 'React Redux Demo'
      }
    ]
  },
]