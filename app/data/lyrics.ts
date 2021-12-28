export type LyricData = {
  id: string;
  lyric: string;
  song: Song;
};

export type Song = {
  name: string;
  spotifyUrl: string;
  album: string;
};

export enum Album {
  DBM = 'Downtown Battle Mountain',
  DGD = 'Dance Gavin Dance',
  DBM2 = 'Downtown Battle Mountain 2',
  AS = 'Acceptance Speech',
  IG = 'Instant Gratification',
  MS = 'Mothership',
  ArSe = 'Artificial Selection',
  AB = 'Afterburner',
}

export const lyricsData: LyricData[] = [
  {
    id: '2342g4',
    lyric:
      "Gray duck, white beaver, fight golden retriever\nOne has meat cleaver nick-named 'Life Eater'",
    song: {
      name: 'Petting Zoo Justice',
      spotifyUrl:
        'https://open.spotify.com/track/1B4UY3AHkFihZmowuofZfR?si=fed6a81e9ed24da6',
      album: Album.MS,
    },
  },
  {
    id: '336ajs',
    lyric:
      "Made up magic turtle guy is feeling like he's crap\nHe needs to spend some time alone to understand his path",
    song: {
      name: 'Midnight Crusade',
      spotifyUrl:
        'https://open.spotify.com/track/4sykUbPIpLYRfZk1ljZcpj?si=1685ca2a7d0a4be2',
      album: Album.ArSe,
    },
  },
  {
    id: '6g24dw',
    lyric: "I flipped that maggot out\nI sniffed that dragon's brew",
    song: {
      name: 'Awkward',
      spotifyUrl:
        'https://open.spotify.com/track/3ZxtJxj45lSs29dZjncz6M?si=bde5310a9a3d47cf',
      album: Album.IG,
    },
  },
  {
    id: '12jk80',
    lyric:
      "I couldn't wait to tap into the brain of my cat\nAnd let him know he's my widdle baby meow meow boo",
    song: {
      name: 'Chocolate Jackalope',
      spotifyUrl:
        'https://open.spotify.com/track/6m1njvWGl1t1YSczTG8Nu1?si=880e950886b84702',
      album: Album.MS,
    },
  },
  {
    id: '98mwy',
    lyric:
      'Remember when you tried to kiss her\nBut she was gay and liked your sister?',
    song: {
      name: 'Lyrics Lie',
      spotifyUrl:
        'https://open.spotify.com/track/46IUSULlL2SAmyyHHpXQJz?si=eb0efbe5c10a40cc',
      album: Album.AB,
    },
  },
  {
    id: '7hamzg',
    lyric: "I was in a viper fight but I'm alright",
    song: {
      name: "Turn Off the Lights, I'm Watching Back to the Future, Pt. 2",
      spotifyUrl:
        'https://open.spotify.com/track/2F3dBr8SRRdOdYkjZdL2Eu?si=87483218229c46ac',
      album: Album.AS,
    },
  },

  {
    id: '9lhzxo',
    lyric: "I spilled my beans\nCause I'm a fiend\nI lost my extra mustard",
    song: {
      name: 'Nothing Shameful',
      spotifyUrl:
        'https://open.spotify.com/track/4PSMNdBxCQ02el8dYzjd7C?si=85dd142e5e56419d',
      album: Album.AB,
    },
  },
  {
    id: '3sxmj7',
    lyric: 'My bedroom chemistry set ended up on your Pinterest',
    song: {
      name: 'Death of a Strawberry',
      spotifyUrl:
        'https://open.spotify.com/track/0ZcQUwVyXgpUepJsvgOYgk?si=61c042db48d146f2',
      album: Album.IG,
    },
  },
  {
    id: 'apmFdI',
    lyric: 'Shave it out, you need a break from hair',
    song: {
      name: 'Jesus H. Macy',
      spotifyUrl:
        'https://open.spotify.com/track/7pOPb4HbCI0o0Uk9g0TP0A?si=8a9cac9245484d67',
      album: Album.AS,
    },
  },

  {
    id: ' ffambi',
    lyric: "I believe there's meaning\nNo, I believe there's nothing",
    song: {
      name: "Surprise! I'm From Cuba, Everyone Has One Brain",
      spotifyUrl:
        'https://open.spotify.com/track/3zsAME3aA38bPMZtm0KOKZ?si=c4e56dc7774b4c93',
      album: Album.DBM,
    },
  },
  {
    id: 'baerss',
    lyric: "I'm not lazy, I'm just baby tiny baby boy",
    song: {
      name: 'Parody Catharsis',
      spotifyUrl:
        'https://open.spotify.com/track/2BtNEbWuP3v4OQiEqcGQSf?si=fc43e2410bab4c19',
      album: Album.AB,
    },
  },
  {
    id: 'n46fn7',
    lyric: "I don't just sit around counting all my money",
    song: {
      name: 'Buffalo!',
      spotifyUrl:
        'https://open.spotify.com/track/5CisuzvrD1d6CBHdu8N7mG?si=96e727a599fa498a',
      album: Album.DGD,
    },
  },
  {
    id: 'asdjkl',
    lyric:
      "You'll go far on the back of a potato\nMaking French fries in the snow",
    song: {
      name: 'Blue Dream',
      spotifyUrl:
        'https://open.spotify.com/track/1hImJ5o3WFH6Nb73oQ8bfY?si=4901428ef328409c',
      album: Album.DBM2,
    },
  },
];

export const getLyric = (paramsId: string) => {
  return lyricsData.find(({ id }) => id === paramsId);
};
