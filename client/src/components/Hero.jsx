import React, { useState } from 'react';

const LinkVideo = 'https://www.youtube.com/embed/W9eEX870abo';

export default function HeroSection() {
    const [showVideo, setShowVideo] = useState(true);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40 bg-white w-full">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="text-black inline-block x-3 py-px mb-4 text-xl font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
                                Sustainable Development Goals
                            </p>
                        </div>
                        <h2 className="text-black max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight sm:text-7xl sm:leading-none">
                            <b>Pembangunan</b>
                            <br className="hidden md:block" />
                            <b>Berkelanjutan</b>{' '}
                        </h2>
                        <p className="text-base text-black xl:text-xl">
                            Let's Change The World!, Make the World For A Better Place!
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <a
                            href="#"
                            className="bg-primary inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            <span className="p-2">Mulai</span>
                        </a>
                        <a
                            href="/login"
                            className="bg-primary inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            <span className="p-2">Hubungi Kami</span>
                        </a>
                    </div>
                </div>
                <div className="relative lg:w-1/2">
                    {showVideo && (
                        <iframe
                            className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
                            src={LinkVideo}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    )}
                </div>
            </div>
        </div>
    );
}