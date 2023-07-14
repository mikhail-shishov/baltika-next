import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

async function getIdea() {

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('X-Requested-With', 'XMLHttpRequest');


  const res = await fetch('https://api.bybaltika.by/api/idea', {
    method: 'GET',
    headers: requestHeaders,
    cache: 'no-store'
  });
  return res.json();
}

export default async function handler(request: NextRequest) {
  try {
    const fontData = await fetch(new URL('/fonts/INTER.ttf', import.meta.url)).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(request.url);

    let idea = await getIdea();


    // const options = {
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'}
    // };
    
    // fetch('http://api.bybaltika.by/api/idea', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));


      
    // ?title=<title>
    // const hasTitle = searchParams.has('idea');
    // const title = hasTitle ? searchParams.get('idea')?.slice(0, 100) : 'день летнего солнцестояния';

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
              maxWidth: '1100px',
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
              сегодня нам нужно провести
            </span>
          </p>
          <p
            style={{
              fontSize: 128,
              fontWeight: 'bold',
              marginTop: 'auto',
              lineHeight: 1,
            }}>
            {idea.text}
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
