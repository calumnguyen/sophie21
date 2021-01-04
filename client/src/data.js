import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
      id: uuidv4(),
      name: 'FROM: Mum',
      artist: 'TO: Sophie',
      cover:
        'https://res.cloudinary.com/calumnguyen/image/upload/v1609643707/michellesophie_wyiyzn.png',
      color: ['#949cdf', '#f6ecf0'],
      audio:
        'https://res.cloudinary.com/calumnguyen/video/upload/v1609642377/MichelleRuppAudio_cjcmfh.mp3',
      active: true,
    },
    {
      id: uuidv4(),
      name: 'FROM: Dad',
      artist: 'TO: Sophie',
      cover:
        'https://res.cloudinary.com/calumnguyen/image/upload/v1609708585/niksophie_mi6liv.png',
      color: ['#e5707e', '#a3ddcb'],
      audio:
        'https://res.cloudinary.com/calumnguyen/video/upload/v1609707430/NikAudio_xftylz.mp3',
      active: false,
    },
    // {
    //   id: uuidv4(),
    //   name: 'Going Back',
    //   artist: 'Sworn',
    //   cover:
    //     'https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg',
    //   color: ['#2B4F8B', '#2F4F5A'],
    //   audio: 'https://mp3.chillhop.com/serve.php/?mp3=10448',
    //   active: false,
    // },
    // {
    //   id: uuidv4(),
    //   name: 'Tales of a Flowing Forest',
    //   artist: 'Leavv',
    //   cover:
    //     'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
    //   color: ['#329160', '#DF864D'],
    //   audio: 'https://mp3.chillhop.com/serve.php/?mp3=9917',
    //   active: false,
    // },
    // {
    //   id: uuidv4(),
    //   name: 'Reflection',
    //   artist: 'Sworn',
    //   cover:
    //     'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
    //   color: ['#E27482', '#7D3376'],
    //   audio: 'https://mp3.chillhop.com/serve.php/?mp3=10448',
    //   active: false,
    // },
    // {
    //   id: uuidv4(),
    //   name: 'Tales of a Flowing Forest',
    //   artist: 'Leavv',
    //   cover:
    //     'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
    //   color: ['#329160', '#DF864D'],
    //   audio: 'https://mp3.chillhop.com/serve.php/?mp3=9917',
    //   active: false,
    // },
  ];
}

export default chillHop;
