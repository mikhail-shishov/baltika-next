import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest) {
  try {
    const fontData = await fetch(new URL('/fonts/INTER.ttf', import.meta.url)).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(request.url);



    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'}
    };
    
    fetch('http://api.bybaltika.by/api/idea', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));


      
    // ?title=<title>
    const hasTitle = searchParams.has('idea');
    const title = hasTitle ? searchParams.get('idea')?.slice(0, 100) : 'день летнего солнцестояния';

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
            padding: '0 55px 55px',
            background: 'linear-gradient(360deg, #237BFF 0%, #1721FF 38.02%, #FF4E4E 100%)',
          }}>
          <p
            style={{
              maxWidth: '700px',
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1,
            }}>
            <span
              style={{
                display: 'block',
              }}>
              🖐🏻
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
              lineHeight: 1,
            }}>
            {title}
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
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
