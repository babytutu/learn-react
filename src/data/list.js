export const NoteList = [
  {
    id: 'React',
    title: 'React@16.12.0',
  },
  {
    id: 'Create-React-App',
    title: 'Create React App@3.3.0',
  },
  {
    id: 'React-Router',
    title: 'React Router@5.1.2',
  },
  {
    id: 'React-Redux',
    title: 'React Redux@7.1.3'
  },
  {
    id: 'React-Redux-Demo',
    title: 'React Redux Demo@7.1.3'
  },
  {
    id: 'Testing-Overview',
    title: 'Testing Overview'
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
    title: 'Notes',
    path: '/note/',
    children: NoteList
  },
  {
    title: 'Demos',
    path: '/',
    children: [
      {
        id: 'demo',
        title: 'CodePen'
      },
      {
        id: 'redux',
        title: 'React Redux'
      },
      {
        id: 'api',
        title: 'API'
      }
    ]
  },
]

export const apiList = [
  'https://api.apis.guru/v2/specs/amazonaws.com/accessanalyzer/2019-11-01/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/codeguru-reviewer/2019-09-19/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/codeguruprofiler/2019-07-18/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/codestar-connections/2019-12-01/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/compute-optimizer/2019-11-01/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/detective/2018-10-26/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/ebs/2019-11-02/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/frauddetector/2019-11-15/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/imagebuilder/2019-12-02/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/kendra/2019-02-03/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/kinesis-video-signaling/2019-12-04/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/networkmanager/2019-07-05/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/outposts/2019-12-03/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/sagemaker-a2i-runtime/2019-11-07/swagger.json',
  'https://api.apis.guru/v2/specs/amazonaws.com/schemas/2019-12-02/swagger.json',
]