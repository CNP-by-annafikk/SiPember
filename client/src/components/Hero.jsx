import BGVideo from '../assets/background-video.png'
// import Typewriter from './Typerwriter';

export default function HeroSection() {
    return (
        <>
            <div className="bg-primary px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-48">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="text-white inline-block x-3 py-px mb-4 text-xl font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
                                    Sustainable Development Goals
                                </p>
                            </div>
                            <h2 className="text-white max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight sm:text-7xl sm:leading-none">
                                <b>Pembangunan</b>
                                <br className="hidden md:block" />
                                <b>Berkelanjutan</b>{' '}
                            </h2>

                            {/* <Typewriter text="This is Working Fine !!" /> */}

                            <p className="text-base text-white xl:text-xl">
                                Let's Change The World!, Make the World For A Better Place!
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <a
                                href="/"
                                className="bg-white inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-primary transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                <span className="p-2">Mulai</span>
                            </a>
                            <a
                                href="/"
                                className="bg-white inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-primary transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                <span className="p-2">Hubungi Kami</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
                            src={BGVideo}
                            alt="Showcase Video"
                        />
                        <a
                            href="#"
                            aria-label="Play Video"
                            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                            onClick={() => window.open('https://youtu.be/tGv7CUutzqU?si=gp0e4Lldi68QACxi')}
                        >
                            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                                <svg
                                    className="w-10 text-gray-900"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
