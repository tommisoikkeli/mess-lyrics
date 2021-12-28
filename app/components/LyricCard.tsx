import { albumCovers } from '~/data/covers';
import { LyricData } from '~/data/lyrics';
import { Link } from 'remix';

type LyricCardProps = {
  lyric: LyricData;
};

export const LyricCard = ({ lyric }: LyricCardProps) => (
  <Link to={lyric.id} prefetch="intent">
    <div className="lyric-card">
      <img
        src={albumCovers[lyric.song.album]}
        alt={lyric.song.album}
        className="lyric-card__cover-image"
      />
      <p>{lyric.lyric}</p>
    </div>
  </Link>
);
