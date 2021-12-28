import { albumCovers } from '~/data/covers';
import { getLyric } from '~/data/lyrics';
import lyricsStyles from '~/styles/lyrics/lyrics.css';
import { MetaFunction, useLoaderData } from 'remix';

type Params = {
  params: { id: string };
};

export let meta: MetaFunction = () => {
  return {
    title: 'Lyric details',
    description: 'Explore lyric details',
  };
};

export const loader = async ({ params }: Params) => {
  return params.id;
};

export const links = () => {
  return [{ rel: 'stylesheet', href: lyricsStyles }];
};

export default function LyricRoute() {
  const id = useLoaderData();

  const lyric = getLyric(id);

  return (
    <div>
      <h2>{lyric?.song.name}</h2>
      <div className="lyric__album">
        <img src={albumCovers[lyric?.song.album as string]} />
        <span>{lyric?.song.album}</span>
      </div>
      <p className="lyric__text">{lyric?.lyric}</p>
      <a href={lyric?.song.spotifyUrl} target="_blank">
        Check out on Spotify!
      </a>
    </div>
  );
}
