import { LyricCard } from '~/components/LyricCard';
import { LyricData, lyricsData } from '~/data/lyrics';
import lyricsStyles from '~/styles/lyrics/lyrics.css';
import { MetaFunction, useLoaderData } from 'remix';

export let meta: MetaFunction = () => {
  return {
    title: 'Lyrics',
    description: 'Explore lyrics',
  };
};

export const links = () => {
  return [{ rel: 'stylesheet', href: lyricsStyles }];
};

export const loader = () => {
  return lyricsData;
};

export default function Posts() {
  const lyrics = useLoaderData();

  return (
    <div>
      <h1>Lyrics</h1>
      {lyrics.map((lyric: LyricData) => (
        <LyricCard lyric={lyric} key={lyric.id} />
      ))}
    </div>
  );
}
