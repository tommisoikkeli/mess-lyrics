import type { MetaFunction } from 'remix';

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Mess Lyrics',
    description: 'Welcome to Mess Lyrics!',
  };
};

const images = [
  '/images/mess1.jpeg',
  '/images/mess2.png',
  '/images/mess3.jpeg',
];

const getRandom = (max: number) => Math.floor(Math.random() * max);

export default function Index() {
  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Mess lyrics explorer!</h2>
        <p>Stoked that you're here. 🥳</p>
        <p>
          Data provided by{' '}
          <a
            href="https://en.wikipedia.org/wiki/Dance_Gavin_Dance"
            target="_blank"
          >
            Jon Mess
          </a>
        </p>
      </main>
      <aside>
        <h2>Random Mess</h2>
        <img
          src={images[getRandom(images.length)]}
          alt="Mess"
          className="random-mess"
        />
      </aside>
    </div>
  );
}
