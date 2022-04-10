const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const albumRandomNum = () => randomNum(1, 500);
const randomColor = () => {
  const colors = [
    'f44336',
    'e91e63',
    '9c27b0',
    '673ab7',
    '3f51b5',
    '2196f3',
    '03a9f4',
    '00bcd4',
    '009688',
    '4caf50',
    '8bc34a',
    'cddc39',
    'ffeb3b',
    'ffc107',
    'ff9800',
    'ff5722',
    '795548',
    '9e9e9e',
    '607d8b',
  ];
  return colors[randomNum(0, colors.length - 1)];
};

const MockAlbum = [
  {
    id: 1,
    name: 'myAlbum1',
    description: 'myAlbum1 description',
    image: `https://via.placeholder.com/${albumRandomNum()}.png/${randomColor()}/?Text=MyText`,
    createdAt: '2022-01-01',
  },
  {
    id: 2,
    name: 'myAlbum2',
    description: 'myAlbum=2 description',
    image: `https://via.placeholder.com/${albumRandomNum()}.png/${randomColor()}/?Text=MyText`,
    createdAt: '2022-02-01',
  },
  {
    id: 3,
    name: 'myAlbum3',
    description: 'myAlbum3 description',
    image: `https://via.placeholder.com/${albumRandomNum()}.png/${randomColor()}/?Text=MyText`,
    createdAt: '2022-01-01',
  },
  {
    id: 4,
    name: 'myAlbum4',
    description: 'myAlbum=4 description',
    image: `https://via.placeholder.com/${albumRandomNum()}.png/${randomColor()}/?Text=MyText`,
    createdAt: '2022-02-01',
  },
  {
    id: 5,
    name: 'myAlbum5',
    description: 'myAlbum5 description',
    image: `https://via.placeholder.com/${albumRandomNum()}.png/${randomColor()}/?Text=MyText`,
    createdAt: '2022-01-01',
  },
  {
    id: 6,
    name: 'myAlbum6',
    description: 'myAlbum=6 description',
    image: `https://via.placeholder.com/${albumRandomNum()}.png/${randomColor()}/?Text=MyText`,
    createdAt: '2022-02-01',
  },
  {
    id: 7,
    name: 'myAlbum4',
    description: 'myAlbum4 description',
    image: `https://via.placeholder.com/${albumRandomNum()}.png/${randomColor()}/?Text=MyText`,
    createdAt: '2022-01-01',
  },
  {
    id: 8,
    name: 'myAlbum8',
    description: 'myAlbum5 description',
    image: `https://via.placeholder.com/${albumRandomNum()}.png/${randomColor()}/?Text=MyText`,
    createdAt: '2022-02-01',
  },
  {
    id: 9,
    name: 'myAlbum9',
    description: 'myAlbum6 description',
    image: `https://via.placeholder.com/${albumRandomNum()}.png/${randomColor()}/?Text=MyText`,
    createdAt: '2022-01-01',
  },
  {
    id: 10,
    name: 'myAlbum10',
    description: 'myAlbum=7 description',
    image: `https://via.placeholder.com/${albumRandomNum()}.png/${randomColor()}/?Text=MyText`,
    createdAt: '2022-02-01',
  },
];

const MockName = [
  {
    id: 1,
  },
];

export { MockAlbum, MockName };
