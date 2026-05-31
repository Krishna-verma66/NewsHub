import React from 'react'
import { House, Bookmark, Globe, Handshake, Drone, HeartPulse, Volleyball, Tv, Atom, Search } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='w-1/5 h-full border-r px-6 py-4 hidden md:flex md:flex-col poppins'>
            <div className='flex flex-col gap-2 w-full'>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-4 py-2 font-semibold cursor-pointer w-full text-xs rounded-md ${isActive
                            ? "bg-blue-200 text-blue-500"
                            : "hover:bg-blue-200 hover:text-blue-500"
                        }`
                    }
                ><House size={15} />
                    Home
                </NavLink>
                <NavLink
                    to="/saved"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-4 py-2 font-semibold cursor-pointer w-full text-xs rounded-md ${isActive
                            ? "bg-blue-200 text-blue-500"
                            : "hover:bg-blue-200 hover:text-blue-500"
                        }`
                    }
                ><Bookmark size={15} />
                    Saved
                </NavLink>

                <NavLink
                    to="/search"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-4 py-2 font-semibold cursor-pointer w-full text-xs rounded-md ${isActive
                            ? "bg-blue-200 text-blue-500"
                            : "hover:bg-blue-200 hover:text-blue-500"
                        }`
                    }
                ><Search size={15} />
                    Search
                </NavLink>
                
            </div>
            <div className='mt-5 border-t py-2 flex flex-col gap-3 w-full'>
                <span className='flex items-center py-2 font-medium w-full text-xs text-gray-400'>Categories</span>
                <NavLink
                    to="/all"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-4 py-2 font-semibold cursor-pointer w-full text-xs rounded-md ${isActive
                            ? "bg-blue-200 text-blue-500"
                            : "hover:bg-blue-200 hover:text-blue-500"
                        }`
                    }
                ><Globe size={15} />
                    All
                </NavLink>

                <NavLink
                    to="/business"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-4 py-2 font-semibold cursor-pointer w-full text-xs rounded-md ${isActive
                            ? "bg-blue-200 text-blue-500"
                            : "hover:bg-blue-200 hover:text-blue-500"
                        }`
                    }
                ><Handshake size={15} /> Business
                </NavLink>

                <NavLink
                    to="/tech"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-4 py-2 font-semibold cursor-pointer w-full text-xs rounded-md ${isActive
                            ? "bg-blue-200 text-blue-500"
                            : "hover:bg-blue-200 hover:text-blue-500"
                        }`
                    }
                ><Drone size={15} /> Technology
                </NavLink>

                <NavLink
                    to="/health"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-4 py-2 font-semibold cursor-pointer w-full text-xs rounded-md ${isActive
                            ? "bg-blue-200 text-blue-500"
                            : "hover:bg-blue-200 hover:text-blue-500"
                        }`
                    }
                ><HeartPulse size={15} /> Health
                </NavLink>

                <NavLink
                    to="/sports"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-4 py-2 font-semibold cursor-pointer w-full text-xs rounded-md ${isActive
                            ? "bg-blue-200 text-blue-500"
                            : "hover:bg-blue-200 hover:text-blue-500"
                        }`
                    }
                ><Volleyball size={15} /> Sports
                </NavLink>

                <NavLink
                    to="/entertainment"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-4 py-2 font-semibold cursor-pointer w-full text-xs rounded-md ${isActive
                            ? "bg-blue-200 text-blue-500"
                            : "hover:bg-blue-200 hover:text-blue-500"
                        }`
                    }
                ><Tv size={15} /> Entertainment
                </NavLink>

                <NavLink
                    to="/science"
                    className={({ isActive }) =>
                        `flex gap-2 items-center px-4 py-2 font-semibold cursor-pointer w-full text-xs rounded-md ${isActive
                            ? "bg-blue-200 text-blue-500"
                            : "hover:bg-blue-200 hover:text-blue-500"
                        }`
                    }
                ><Atom size={15} /> Science
                </NavLink>
                
            </div>
        </div>
    )
}

export default SideBar