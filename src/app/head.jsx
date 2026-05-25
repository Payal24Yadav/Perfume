import Head from 'next/head';

export default function CustomHead() {
  return (
    <Head>
      <title>FUMELUXE | Luxury 3D Perfume Website</title>
      <meta name="description" content="Experience premium designer, niche, and middle eastern fragrances through an immersive luxury 3D perfume website built with Next.js and Three.js." />
      <meta property="og:title" content="FUMELUXE | Luxury 3D Perfume Website" />
      <meta property="og:description" content="Experience premium designer, niche, and middle eastern fragrances through an immersive luxury 3D perfume website built with Next.js and Three.js." />
      <meta property="og:image" content="/images/fumeluxe_hero.png" />
      <meta property="og:type" content="website" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
    </Head>
  );
}
