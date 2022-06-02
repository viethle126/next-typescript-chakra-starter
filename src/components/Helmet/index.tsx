import React from "react"
import Head from "next/head"

interface HelmetProps {
  title: string
  description?: string
  image?: string
  meta?: React.ReactNode
  children?: any
}

const Helmet: React.FC<HelmetProps> = ({
  title,
  description = "",
  image,
  meta,
  children,
}) => {
  const metaData = {
    title: title || "Next.js TypeScript Chakra Starter",
    description: description || "Next.js TypeScript Chakra Starter",
    image: image || "/icon.svg",
  }

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="title" content={metaData.title} />
      <meta name="description" content={metaData.description} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={metaData.image} />
      {meta}
      {children}
    </Head>
  )
}

export default Helmet
