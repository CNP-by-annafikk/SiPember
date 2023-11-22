// Import
import NavbarSection from '../components/Navbar';
import HeroSection from '../components/Hero';
import GallerySection from '../components/Gallery';
import FooterSection from '../components/Footer';

import Dev_Api from '../components/dev/DevApi';

export default function BerandaSection() {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <section className='navbar' id='navbar'>
                <NavbarSection />
            </section>

            <section className='beranda-1 bg-primary' id='beranda1'>
                <HeroSection />
            </section>

            <section className='beranda-2 bg-white' id='beranda2'>
            </section>

            <section className='beranda-2 bg-white' id='beranda3'>
            </section>

            <section className='footer' id='footer'>
                <FooterSection />
            </section>
        </>
    );
}
