import React, { useState } from 'react';
import { BackgroundGedung, LogoBiru, ShowPw, HidePw } from '../assets/assets';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePw = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundGedung})` }}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-0 sm:p-8 flex flex-col items-center">
                        <a href="/beranda" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-8 h-8 mr-2" alt="logo" src={LogoBiru} />
                            SIPB
                        </a>
                        <div className="p-2 space-y-2 md:space-y-6 w-full sm:p-0">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Masuk ke akun Anda
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Anda</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Email" required />
                                </div>
                                <div className="relative">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kata Sandi</label>
                                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Masukkan Kata Sandi" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    <button type="button" className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 focus:outline-none" onClick={togglePw}>
                                        {showPassword ? <img className="h-6 w-6 -translate-x-1 translate-y-3.5" src={HidePw} alt="Mata tertutup" /> : <img className="h-6 w-6 -translate-x-1 translate-y-3.5" src={ShowPw} alt="Mata terbuka" />}
                                    </button>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Masuk</button>
                                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                    Belum memiliki akun? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Daftar</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}