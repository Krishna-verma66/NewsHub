import { useContext, useEffect, useRef } from 'react'
import NewsCarousel from './NewsCarousel'
import { NewsContext } from '../../Context/NewNewsContext'
import Recommended from './Recommended'


const Home = () => {

    const { newNewsData, setNewData, Loading, fetchNewNews } = useContext(NewsContext);

    useEffect(() => {
        if (newNewsData.length === 0) {
            fetchNewNews();
        }
    }, [newNewsData]);

    return (
        <div className='poppins w-[60%] h-full px-3 py-3 md:px-8 md:py-6 overflow-y-scroll no-scrollbar will-change-scroll'>
            <h1 className='text-2xl font-semibold'>Discover</h1>
            <p className='text-xs font-normal text-gray-600'>Stay updated with the latest news from around the world.</p>
            <div className='mt-4'>
                <NewsCarousel />
                <Recommended />
            </div>
        </div>
    )
}

export default Home