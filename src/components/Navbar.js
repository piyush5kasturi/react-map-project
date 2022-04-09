import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-700 py-3">
            <div className="max-w-8xl mx-52 px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* <!--
                            Icon when menu is closed.

                            Heroicon name: outline/menu

                            Menu open: "hidden", Menu closed: "block"
                --> */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* <!--
                            Icon when menu is open.

                            Heroicon name: outline/x

                            Menu open: "block", Menu closed: "hidden"
                --> */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <a className="text-white text-2xl" href="#">SENEGAL DROUGHT AND CROP WATCH</a>
                        </div>
                        <div className="hidden absolute right-0 items-center sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <NavLink to="/" className="text-gray-300 px-3 py-1 rounded-md text-lg font-medium">Home Page</NavLink>

                                <NavLink to="/intractive"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-lg font-medium">Interactive
                                    Map</NavLink>

                                <NavLink to="/bulletine"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-lg font-medium">Creating
                                    Bulletin</NavLink>

                                <NavLink to="/spatial"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-lg font-medium">Spatial
                                    Maps</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar