import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md sticky top-0 z-50">
            {/* Logo */}
            <a className="font-extrabold text-2xl text-purple-700 hover:text-purple-900 transition duration-300" href="#">
                Nithya Sree
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex space-x-8 text-gray-700 font-medium">
                    <li>
                        <a
                            href="/"
                            className="hover:text-purple-700 transition duration-300"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#about"
                            className="hover:text-purple-700 transition duration-300"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#projects"
                            className="hover:text-purple-700 transition duration-300"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#resume"
                            className="hover:text-purple-700 transition duration-300"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#contact"
                            className="hover:text-purple-700 transition duration-300"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation */}
            {toggleMenu && (
                <nav className="absolute top-16 right-6 bg-white border border-gray-200 rounded-lg shadow-lg md:hidden">
                    <ul
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className="flex flex-col space-y-4 p-6 text-gray-700 font-medium"
                    >
                        <li>
                            <a
                                href="/"
                                className="hover:text-purple-700 transition duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-purple-700 transition duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-purple-700 transition duration-300"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#resume"
                                className="hover:text-purple-700 transition duration-300"
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-purple-700 transition duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}

            {/* Toggle Menu Button */}
            <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="block md:hidden focus:outline-none"
            >
                <Bars3Icon className="text-purple-700 h-7 w-7" />
            </button>
        </header>
    );
}
