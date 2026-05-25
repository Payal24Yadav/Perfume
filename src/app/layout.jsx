import '../styles/globals.css';

export const metadata = {
  title: 'FUMELUXE | Luxury 3D Perfume Website',
  description: 'Experience premium designer, niche, and middle eastern fragrances through an immersive luxury 3D perfume website built with Next.js and Three.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body bg-white text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
