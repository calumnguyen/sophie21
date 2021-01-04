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
    {
      id: uuidv4(),
      name: 'FROM: Grandpa & Granny',
      artist: 'TO: Sophie',
      cover:
        'https://res.cloudinary.com/calumnguyen/image/upload/v1609714196/granmasoph_zeg2g6.png',
      color: ['#f5b461', '#f3eac2'],
      audio:
        'https://res.cloudinary.com/calumnguyen/video/upload/v1609713792/GrandpaGrandmaAudio_b2eocv.mp3',
      active: false,
    },
    {
      id: uuidv4(),
      name: 'FROM: Claire, Steve and Alannah',
      artist: 'TO: Sophie',
      cover:
        'https://res.cloudinary.com/calumnguyen/image/upload/v1609716366/clairealannahsoph_nnfxob.png',
      color: ['#28abb9', '#2d6187'],
      audio:
        'https://res.cloudinary.com/calumnguyen/video/upload/v1609715970/ClaireAlaanahSteveAudio_m5d04a.mp3',
      active: false,
    },
    {
      id: uuidv4(),
      name: 'FROM: Corrie',
      artist: 'TO: Sophie',
      cover:
        'https://res.cloudinary.com/calumnguyen/image/upload/v1609717711/corriesoph_ud16pt.png',
      color: ['#a6a9b6', '#eff8ffc'],
      audio:
        'https://res.cloudinary.com/calumnguyen/video/upload/v1609717597/CorrieAudio_t7qouu.mp3',
      active: false,
    },
    {
      id: uuidv4(),
      name: 'FROM: Alexandria',
      artist: 'TO: Sophie',
      cover:
        'https://res.cloudinary.com/calumnguyen/image/upload/v1609717711/corriesoph_ud16pt.png',
      color: ['#00917c', '#fde8cd'],
      audio:
        'https://res.cloudinary.com/calumnguyen/video/upload/v1609733635/AlexandriaAudio_tuzdgs.mp3',
      active: false,
    },
  ];
}

export default chillHop;
