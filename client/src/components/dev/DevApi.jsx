import React, { Component } from 'react';

export default class Dev_Api extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    componentDidMount() {
        this.callAPI();
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
                    <div className="rounded-lg bg-white p-8 text-center shadow-xl">
                        <h1 className="text-green-600 mb-4 text-8xl font-bold">202</h1>
                        <p className="text-gray-600 text-3xl">Accepted</p><br />
                        <p className="text-gray-600">Oops! The page you are looking for is still in development.</p>
                        {this.state.apiResponse ? (
                            <p className="App-intro text-gray-600">Note: {this.state.apiResponse}</p>
                        ) : (
                            <p className="App-intro text-gray-600">Note: API Not Connected</p>
                        )}
                        <a href="/" className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Reload Page </a>
                    </div>
                </div>
            </>
        );
    }
}
