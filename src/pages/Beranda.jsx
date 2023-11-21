// Import
import NavbarSection from '../components/Navbar';
import HeroSection from '../components/Hero';
import GallerySection from '../components/Gallery';
import FooterSection from '../components/Footer';

export default function BerandaSection() {
    return (
        <>
            <div className='bg-white'>
                <section><NavbarSection /></section>
                <section><HeroSection /></section>
                <section>
                    <h1 className='text-black'>Logo</h1>
                    <GallerySection />
                </section>
                <section><FooterSection /></section>
            </div>
        </>
    );
}
