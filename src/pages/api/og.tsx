import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {

  const fontData = await fetch(
    new URL('/fonts/INTER.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          fontFamily: '"Inter"',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          padding: '0 33px 55px',
          background: 'linear-gradient(360deg, #237BFF 0%, #1721FF 38.02%, #FF4E4E 100%)',
        }}>
        <p
          style={{
            maxWidth: '700px',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1
          }}>
          <span
            style={{
              display: 'block',
            }}>🖐🏻 
          </span>
          <span
            style={{
              display: 'block',
            }}>
            сегодня нам нужно
          </span>
          <span
            style={{
              display: 'block',
            }}>
            собраться потому что
          </span>
        </p>
        <p
          style={{
            fontSize: 128,
            fontWeight: 'bold',
            marginTop: 'auto',
            lineHeight: 1
          }}>
          день летнего солнцестояния
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 623,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
        },
      ]
    }
  );
}
