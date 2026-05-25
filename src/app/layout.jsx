import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThreeCanvas from '../components/ThreeCanvas';

export const metadata = {
  title: 'FUMELUXE | Premium Luxury 3D Experience',
  description: 'Experience premium designer, niche, and middle eastern fragrances through an immersive luxury 3D perfume website built with Next.js and Three.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body bg-white text-black overflow-x-hidden selection:bg-gold selection:text-white relative min-h-screen">
        {/* Persistent Luxury Navigation */}
        <Navbar />

        {/* Persistent 3D Interactive Canvas */}
        <ThreeCanvas />

        {/* Main Content Area */}
        <main className="relative z-20">
          {children}
        </main>

        {/* Persistent Luxury Footer */}
        <Footer />
      </body>
    </html>
  );
}

