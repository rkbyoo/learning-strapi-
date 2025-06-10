'use client';

import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img src="/shop.svg" width={24} alt="logo" />
                    <span className="ml-3 text-xl">myshop</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-white">Home</Link>
                    <Link href="/about" className="mr-5 hover:text-white">About</Link>
                    <Link href="/products" className="mr-5 hover:text-white">Products</Link>
                    <Link href="/contact" className="mr-5 hover:text-white">Contact Us</Link>
                </nav>
                <button className="inline-flex items-center bg-blue-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Login
                </button>
            </div>
        </header>
    );
}

export default Header;
