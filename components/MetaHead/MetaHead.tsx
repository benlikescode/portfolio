import NextHead from 'next/head'
import { FC } from 'react'

type Props = {
  title?: string
  description?: string
  ogUrl?: string
  ogImage?: string
}

const MetaHead: FC<Props> = ({ title, description, ogUrl, ogImage }) => {
  const defaultTitle = 'Ben Hoeg'
  const defaultDescription = 'Ben Hoeg is a fullstack software developer.'
  const defaultOGURL = 'https://benhoeg.com'
  const defaultOGImage = '/images/og-image.png'

  return (
    <NextHead>
      <meta charSet="utf-8" />
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="viewport-fit=cover,width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#0a0a0a" />

      <meta property="og:url" content={ogUrl || defaultOGURL} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content={title || defaultTitle} />
      <meta property="og:image" content={ogImage || defaultOGImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={description || defaultDescription} />

      <meta name="twitter:image" content={ogImage || defaultOGImage} />
      <meta name="twitter:url" content={ogUrl || defaultOGURL} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </NextHead>
  )
}

export default MetaHead
