export const NoteList = [
  {
    id: 'React',
    title: 'React@16.13.0',
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
      },
      {
        id: 'weather',
        title: 'Weather',
      }
    ]
  },
]

export const apiList = [
  'https://api.apis.guru/v2/specs/1forge.com/0.0.1/swagger.json',
  'https://api.apis.guru/v2/specs/adyen.com/AccountService/4/openapi.json',
  'https://api.apis.guru/v2/specs/adobe.com/aem/2.5.0-pre/swagger.json',
]

export const cityList = ['杭州', '北京', '上海']

// amap key
const key = '642bfc64d46e4dc4ecaf2bbe97510e74'
// amap api prefix
const host = '//restapi.amap.com'

/**
 * @see https://lbs.amap.com/api/webservice/guide/api/weatherinfo
 */
export const weatherUrl = (city = '杭州', extensions = 'all') => `${host}/v3/weather/weatherInfo?key=${key}&extensions=${extensions}&city=${city}`
