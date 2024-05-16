import NavbarSection from '../components/Navbar';
import FooterSection from '../components/Footer';

export default function KontakSection() {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <div id='beranda'>
                <section className='navbar fixed' id='navbar'>
                    <NavbarSection />
                </section>

                <section className='beranda-1' id='beranda1'>
                </section>

                <section className='footer' id='footer'>
                    <FooterSection />
                </section>
            </div>
        </>
    );
}