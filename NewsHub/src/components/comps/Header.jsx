import React, { useState, useContext } from 'react'
import { Origami, Search, Moon, Bell } from 'lucide-react'
import { SearchedNewsContext } from '../../Context/AllNewsContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const { fetchSearchedNews } = useContext(SearchedNewsContext)
    const [SearchCate, setSearchCate] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (SearchCate === '') {

            fetchSearchedNews(NaN);
        } else {

            fetchSearchedNews(SearchCate);
        }
        navigate('/search');
    }

    return (
        <div className='flex items-center justify-between px-6 py-3 w-full bg-blue-100'>
            <div className='text-sm md:text-lg font-bold poppins flex gap-2'>
                <span className='text-blue-500 font-light hidden md:flex'>
                    <Origami />
                </span>
                NewsHub
            </div>

            <div className='border border-gray-400 px-4 py-2 w-[35%] gap-3 hidden md:flex md:items-center'>
                <input
                    className='w-[95%] text-xs font-normal poppins text-gray-500 border-none outline-none focus:text-black'
                    type='text'
                    placeholder='Search for any news topic...'
                    value={SearchCate}
                    onChange={(e) => {
                        setSearchCate(e.target.value);
                    }}
                />
                <Search size={20} className='font-semibold' onClick={() => {
                    if (SearchCate !== '') {
                        handleSearch();
                    }
                }} />
            </div>
        </div>
    )
}

export default Header;
