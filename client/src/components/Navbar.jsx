import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo/logo-putih.png';

const navigation = [
    { name: 'Beranda', href: '/beranda' },
    { name: 'Tentang', href: '/tentang' },
    { name: 'Program', href: '/program' },
    { name: 'Kontak', href: '/kontak' },
];

const MenuItem = ({ item, pathname, onClick }) => (
    <Link
        to={item.href}
        className={`block rounded-md px-3 py-2 text-sm font-medium ${pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
        onClick={onClick}
    >
        {item.name}
    </Link>
);

export default function NavbarSection() {
    const { pathname } = useLocation();
    const [currentTimeString, setCurrentTimeString] = useState(new Date().toLocaleTimeString());
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    const tick = () => {
        setCurrentTimeString(new Date().toLocaleTimeString());
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <Disclosure as="nav" className="bg-primary fixed w-full z-50 top-0 left-0 bg-opacity-100">
            {({ open }) => (
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-auto mr-2" src={Logo} alt="Logo SIPB" />
                            <span className="text-white text-lg font-bold">SIPB</span>
                        </div>
                        <div className="hidden sm:flex sm:ml-6">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <MenuItem key={item.name} item={item} pathname={pathname} onClick={() => setMobileMenuOpen(false)} />
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-black text-white rounded-md px-3 py-1 mr-4">{currentTimeString}</div>
                        </div>
                        <div className="sm:hidden">
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleMobileMenu}>
                                <span className="sr-only">Main Menu</span>
                                {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                            </Disclosure.Button>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden" open={mobileMenuOpen}>
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <MenuItem key={item.name} item={item} pathname={pathname} onClick={() => setMobileMenuOpen(false)} />
                            ))}
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
}