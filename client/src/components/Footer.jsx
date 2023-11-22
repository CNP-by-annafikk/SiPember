import { Footer } from 'flowbite-react';
import { BsTiktok, BsFacebook, BsGithub, BsDiscord, BsTwitter, BsLinkedin } from 'react-icons/bs';
import Logo from '../assets/logo-biru.png'

export default function FooterSection() {
    return (
        <Footer container>
            <div className="w-full px-4">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="#"
                            src={Logo}
                            alt="Logo SIPB"
                            name="SIPB"
                            onClick={() => window.open('https://annafikk.my.id')}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Tentang" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#beranda1" onClick={() => scrollToSection('hero')}>Pengenalan SDGs</Footer.Link>
                                <Footer.Link href="#" onClick={() => scrollToSection('hero')}>Tujuan SDGs</Footer.Link>
                                <Footer.Link href="#" onClick={() => scrollToSection('hero')}>Pilar SDGs</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Program" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" onClick={() => scrollToSection('hero')}>Informasi SDGs</Footer.Link>
                                <Footer.Link href="#" onClick={() => scrollToSection('hero')}>Infrastruktur SDGs</Footer.Link>
                                <Footer.Link href="#" onClick={() => scrollToSection('hero')}>FAQ</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Kontak" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" onClick={() => scrollToSection('hero')}>Hubungi Kami</Footer.Link>
                                <Footer.Link href="#" onClick={() => scrollToSection('hero')}>Syarat &amp; Ketentuan</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="SIPB | All Right Reserved" year={2023} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="#"
                            alt="Facebook"
                            onClick={() => window.open('https://www.facebook.com/anna.fi.777/')}
                            icon={BsFacebook}
                        />
                        <Footer.Icon
                            href="#"
                            alt="TikTok"
                            onClick={() => window.open('https://www.tiktok.com/@hmmppss')}
                            icon={BsTiktok}
                        />
                        <Footer.Icon
                            href="#"
                            alt="TikTok"
                            onClick={() => window.open('https://www.twitter.com/annafikk1')}
                            icon={BsTwitter}
                        />
                        <Footer.Icon
                            href="#"
                            alt="TikTok"
                            onClick={() => window.open('https://github.com/annafikk')}
                            icon={BsGithub}
                        />
                        <Footer.Icon
                            href="#"
                            alt="TikTok"
                            onClick={() => window.open('https://www.linkedin.com/in/muhammad-hanif-annafi/')}
                            icon={BsLinkedin}
                        />
                        <Footer.Icon
                            href="#"
                            alt="TikTok"
                            onClick={() => window.open('https://discord.gg/tHxj5r2rXh')}
                            icon={BsDiscord}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    );
}