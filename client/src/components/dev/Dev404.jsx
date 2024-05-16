import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import BerandaSection from '../../pages/Beranda';

export default class PageNotFound extends Component {
    render() {
        return (
            <>
                <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
                    <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                        <h1 className="text-green-600 mb-4 text-8xl font-bold">404</h1>
                        <p className="text-gray-600 text-3xl"><b>Page Not Found :(</b></p><br />
                        <p className="text-gray-600 pb-4">Halaman yang Anda cari mungkin telah <b>dipindahkan </b> atau <b>dihapus</b>.</p>
                        <Link to="/beranda"> {this.BerandaSection}
                            <button
                                type="button"
                                className="text-green-600 hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                            >
                                Kembali Ke Beranda
                            </button>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}
