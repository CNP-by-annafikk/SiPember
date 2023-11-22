import React from "react"
import Logo1 from '../assets/logo-sdgs/logo-1.jpg'
import Logo2 from '../assets/logo-sdgs/logo-2.jpg'
import Logo3 from '../assets/logo-sdgs/logo-3.jpg'
import Logo4 from '../assets/logo-sdgs/logo-4.jpg'
import Logo5 from '../assets/logo-sdgs/logo-5.jpg'
import Logo6 from '../assets/logo-sdgs/logo-6.jpg'
import Logo7 from '../assets/logo-sdgs/logo-7.jpg'
import Logo8 from '../assets/logo-sdgs/logo-8.jpg'
import Logo9 from '../assets/logo-sdgs/logo-9.jpg'
import Logo10 from '../assets/logo-sdgs/logo-10.jpg'
import Logo11 from '../assets/logo-sdgs/logo-11.jpg'
import Logo12 from '../assets/logo-sdgs/logo-12.jpg'
import Logo13 from '../assets/logo-sdgs/logo-13.jpg'
import Logo14 from '../assets/logo-sdgs/logo-14.jpg'
import Logo15 from '../assets/logo-sdgs/logo-15.jpg'
import Logo16 from '../assets/logo-sdgs/logo-16.jpg'
import Logo17 from '../assets/logo-sdgs/logo-17.jpg'
import Logo18 from '../assets/logo-sdgs/logo-sdgs.jpg'

export default function GallerySection() {
    const imageSources = [
        Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7,
        Logo8, Logo9, Logo10, Logo11, Logo12, Logo13, Logo14,
        Logo15, Logo16, Logo17, Logo18];

    return (
        <div className="grid px-10 grid-cols-2 md:grid-cols-6 gap-4">
            {imageSources.map((src, index) => (
                <div key={index}>
                    <img className="h-auto max-w-full rounded-lg" src={src} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}