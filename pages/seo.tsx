import React from 'react';
import Head from 'next/head';

const SEO = () => {
  return (
    <Head>
      <title>Komerce Class</title>
      <link rel="icon" href='./images/favicon.svg' />
      <meta name="Komere Class" content="Komere Class" />
      <meta name="og:title" content="Komere Class" />
      <meta name="description" content="Komerce Class" />
      <meta property="og:description" content="Komerce Class" />
      {/* <meta
        property="og:image"
        content={image === null || `` ? '/images/Banner-Desktop.png' : image}
      />
      <meta
        property="image"
        content={image === null || `` ? '/images/Banner-Desktop.png' : image}
      /> */}
    </Head>
  );
};

export default SEO;
