// Import
import NavbarSection from '../components/Navbar';
import HeroSection from '../components/Hero';
import FooterSection from '../components/Footer';

export default function BerandaSection() {
    return (
        <>
            <div id='beranda'>
                <section className='navbar' id='navbar'>
                    <NavbarSection />
                </section>

                <section className='beranda-1' id='beranda1'>
                    <div className='beranda-1  w-full h-screen'>
                        <HeroSection />
                    </div>
                </section>

                <section className='footer' id='footer'>
                    <FooterSection />
                </section>
            </div>
        </>
    );
}
