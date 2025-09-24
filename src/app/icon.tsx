
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  const imageData = await fetch(new URL('../../public/logos/branding-consulting.jpg', import.meta.url)).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      >
        <img 
          width="32" 
          height="32" 
          // @ts-ignore
          src={imageData}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
