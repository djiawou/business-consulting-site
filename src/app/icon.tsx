
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  const imageData = await fetch(new URL('../../public/logos/branding-consulting.jpg', import.meta.url)).then((res) => res.arrayBuffer());

  // Inline styles are required for ImageResponse API (next/og)
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: 'transparent',
  };

  return new ImageResponse(
    (
      <div style={containerStyle}>
        <img 
          width="32" 
          height="32" 
          alt="Business Consulting Site Icon"
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
