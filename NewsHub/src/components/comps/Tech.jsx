import { useContext, useEffect, useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel'
import { TechNewsContext } from '../../Context/AllNewsContext'
import { SavedDataContext } from '../../Context/NewsDataContext'
import { ViewNewsContext } from '../../Context/ViewNewsContext'


const Tech = () => {
    const { savedData, setData, fetchNews } = useContext(SavedDataContext);
    const { viewData, setviewData } = useContext(ViewNewsContext);
    const { TechNewsData, setTechData, TechLoading, carouselData, fetchTechNews } = useContext(TechNewsContext);



    useEffect(() => {
        if (TechNewsData.length === 0) {
            fetchTechNews();
        }
    }, [TechNewsData]);



    const getNews = () => {
        let data = JSON.parse(localStorage.getItem('savedNews')) || [];
        return data;
    }

    const savedOrNot = (id) => {

        let viewNews = null;
        let existingNews = getNews();

        if (existingNews.length != 0) {
            existingNews.forEach((item) => {
                if (item.id == id) {
                    viewNews = item;
                }
            })
        }

        if (viewNews === null) {
            return 'Save';
        }

        return 'Saved';

    }

    const handleViewNews = (id) => {
        let viewNews = null;

        TechNewsData.forEach((item) => {
            if (item.id == id) {
                viewNews = item;
            }
        })

        let existingNews = getNews();

        if (viewNews == null) {
            existingNews.forEach((item) => {
                if (item.id == id) {
                    viewNews = item;
                }
            })
        }

        setviewData(viewNews);
    }

    const saveNews = (updatedNews) => {
        localStorage.setItem('savedNews', JSON.stringify(updatedNews));
        fetchNews();
    }

    const removeNews = (id) => {

        let savingNews;

        TechNewsData.forEach((item) => {
            if (item.id == id) {
                savingNews = item;
            }
        })

        let existingNews = getNews();

        let updatedNews = existingNews.filter((item) => item.id !== savingNews.id)

        if (updatedNews.length == existingNews.length) {
            updatedNews.push(savingNews);
        }

        saveNews(updatedNews);

    }


    return (
        <div className='poppins w-[60%] h-full px-3 py-3 md:px-8 md:py-6 overflow-y-scroll no-scrollbar will-change-scroll'>
            <h1 className='text-2xl font-semibold'>Discover</h1>
            <p className='text-xs font-normal text-gray-600'>Stay updated with the latest news from around the world.</p>
            <div className='mt-4'>

                <div className="w-full relative">
                    {
                        TechLoading ? <div>Loading...</div> : <Carousel
                            opts={{
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent>

                                {carouselData.map((item, index) => (

                                    <CarouselItem key={index} onClick={() => {
                                        handleViewNews(item.id);
                                    }}>

                                        <div className="rounded-xl overflow-hidden relative h-40 md:h-70">

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/10 z-10 p-6 md:p-10 flex flex-col justify-end">

                                                <span className="w-fit text-white bg-blue-600 rounded px-3 py-1 font-medium text-xs">
                                                    {item.source.name}
                                                </span>

                                                <h1 className="w-full md:w-[45%] mt-4 text-sm md:text-xl font-semibold text-white line-clamp-2">
                                                    {item.title}
                                                </h1>

                                                <p className="w-full md:w-[45%] md:text-sm text-[10px] text-white/80 mt-3 line-clamp-4">
                                                    {item.description}
                                                </p>

                                            </div>

                                            {/* Image */}
                                            <img
                                                className="w-full h-full object-cover"
                                                src={item.image}
                                                alt=""
                                            />

                                        </div>

                                    </CarouselItem>
                                ))}

                            </CarouselContent>

                            <CarouselPrevious className="left-[88%] top-[90%]" />
                            <CarouselNext className="right-[2%] top-[90%]" />

                        </Carousel>
                    }
                </div>

                <div className='flex w-full mt-6 flex-col'>
                    <div className='flex items-center justify-between w-full poppins'>
                        <h1 className='font-medium text-sm'>Recommended For You</h1>
                        <button className='font-medium text-xs text-gray-600'>View All</button>
                    </div>
                    {
                        TechNewsData.map((item) => (
                            <div
                                key={item.id}
                                className='flex justify-between items-center pr-5 w-full h-28 mt-4 border rounded-lg overflow-hidden'
                                onClick={() => {
                                    handleViewNews(item.id);
                                }}
                            >

                                <div className='flex items-center w-3/4 h-full gap-4'>

                                    <div className='w-1/3 h-full shrink-0'>
                                        <img className='w-full h-full object-cover' src={item.image} alt='' />
                                    </div>

                                    <div className='flex flex-col gap-2 w-2/3'>
                                        <p className='text-[10px] font-medium text-gray-500'>{item.publishedAt.split('T')[0]}</p>
                                        <h2 className='font-semibold text-sm line-clamp-2'>{item.title}</h2>
                                        <span className="w-fit text-white bg-blue-600 rounded px-3 py-1 font-medium text-xs">
                                            {item.source.name}
                                        </span>
                                    </div>

                                </div>
                                <button className='text-sm text-white font-medium border-none px-3 py-1 bg-blue-600 rounded-lg' onClick={(e) => {
                                    e.stopPropagation();
                                    if (e.target.innerHTML == 'Save') {
                                        e.target.innerHTML = 'Saved';
                                    } else {
                                        e.target.innerHTML = 'Save';
                                    }
                                    removeNews(item.id)

                                }} >{savedOrNot(item.id)}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tech