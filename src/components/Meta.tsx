import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link rel='icon' type='image/svg+xml' href='/favicon/favicon.svg' />
      <link rel='icon' type='image/png' href='/favicon/icon1.png' />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <link rel='apple-touch-icon' href='/favicon/apple-icon.png' />
      <meta name='apple-mobile-web-app-title' content='Blood of the Bat' />
      <meta name='application-name' content='Blood of the Bat' />
      <link rel='manifest' href='/favicon/manifest.json' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#000000'
      />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#000' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta
        name='description'
        content='Blood of the Bat is a blog dedicated to all things Black Sabbath, featuring our tribute band news, gig recaps, song breakdowns, and more.'
      />
      <meta
        property='og:image'
        content='/public/images/chatgpt-image-sep-6--2025--11_41_44-am-QxND.png'
      />
    </Head>
  )
}

export default Meta
