import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          fontFamily: 'Inter, sans-serif',
          width: '100%',
          height: '100%',
          display: 'flex',
          color: 'white',
          padding: '28px 33px 55px',
          background: 'linear-gradient(360deg, #237BFF 0%, #1721FF 38.02%, #FF4E4E 100%)'
        }}
      >
        <span>🖐🏻<br/>сегодня нам нужно<br/>собраться потому что</span>
        <span style={{
          fontSize: 128,
          fontWeight: '700'
        }}>день летнего солнцестояния</span>
      </div>
    ),
    {
      width: 1200,
      height: 623,
    },
  );
}