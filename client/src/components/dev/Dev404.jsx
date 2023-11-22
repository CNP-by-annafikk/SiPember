import React, { Component } from 'react';

export default class PageNotFound extends Component {
    render() {
        return (
            <>
                <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
                    <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                        <h1 className="text-green-600 mb-4 text-8xl font-bold">404</h1>
                        <p className="text-gray-600 text-3xl"><b>Page Not Found :(</b></p><br />
                        <p className="text-gray-600 pb-4">The page you are looking for may have been <b>moved</b> or <b>deleted</b>.</p>

                    </div>
                </div>
            </>
        );
    }
}
