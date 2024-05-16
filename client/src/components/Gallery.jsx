import React from "react";
import { Link } from 'react-router-dom';
import {
    Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8,
    Logo9, Logo10, Logo11, Logo12, Logo13, Logo14, Logo15, Logo16,
    Logo17, Logo18
} from '../assets/assets'

export default function GallerySection() {
    const images = [
        { src: Logo1, link: '/link1', info: 'Information 1' },
        { src: Logo2, link: '/link2', info: 'Information 2' },
        { src: Logo3, link: '/link3', info: 'Information 3' },
        { src: Logo4, link: '/link4', info: 'Information 4' },
        { src: Logo5, link: '/link5', info: 'Information 5' },
        { src: Logo6, link: '/link6', info: 'Information 6' },
        { src: Logo7, link: '/link7', info: 'Information 7' },
        { src: Logo8, link: '/link8', info: 'Information 8' },
        { src: Logo9, link: '/link9', info: 'Information 9' },
        { src: Logo10, link: '/link10', info: 'Information 10' },
        { src: Logo11, link: '/link11', info: 'Information 11' },
        { src: Logo12, link: '/link12', info: 'Information 12' },
        { src: Logo13, link: '/link13', info: 'Information 13' },
        { src: Logo14, link: '/link14', info: 'Information 14' },
        { src: Logo15, link: '/link15', info: 'Information 15' },
        { src: Logo16, link: '/link16', info: 'Information 16' },
        { src: Logo17, link: '/link17', info: 'Information 17' },
        { src: Logo18, link: '/link18', info: 'Information 18' },
    ];

    return (
        <div className="grid px-10 grid-cols-2 md:grid-cols-6 gap-4 lg:py-28">
            {images.map((image, index) => (
                <div key={index} className="relative group">
                    <Link to={image.link}>
                        <img className="h-auto max-w-full rounded-lg" src={image.src} alt={`Image ${index + 1}`} />
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 hidden group-hover:block text-center">
                        {image.info}
                    </div>
                </div>
            ))}
        </div>
    );
}
