import NavbarSection from '../components/Navbar';
import FooterSection from '../components/Footer';

import HeroSection from '../components/Hero';

export default function BerandaSection() {
    return (
        <>
            <div id='beranda'>
                <section className='navbar' id='navbar'>
                    <NavbarSection />
                </section>

                <section className='beranda-1' id='beranda1'>
                    <HeroSection />
                    <HeroSection />
                </section>

                {/* <section className='footer w-full h-screen' id='footer'>
                    <FooterSection />
                </section> */}
            </div>
        </>
    );
}
