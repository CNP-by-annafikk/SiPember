import NavbarSection from '../components/Navbar';
import FooterSection from '../components/Footer';

import GallerySection from '../components/Gallery'

export default function TentangSection() {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <div id='beranda'>
                <section className='navbar' id='navbar'>
                    <NavbarSection />
                </section>

                <section className='beranda-1' id='beranda1'>
                    {/* <GallerySection /> */}
                </section>

                {/* <section className='footer' id='footer'>
                    <FooterSection />
                </section> */}
            </div>
        </>
    );
}