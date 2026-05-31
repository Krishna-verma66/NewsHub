import { useContext } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, useCarousel } from '../ui/carousel'
import { NewsContext } from '../../Context/NewNewsContext'



const NewsCarousel = () => {

    const { newNewsData, setNewData, Loading, carouselData, fetchNewNews } = useContext(NewsContext);



    return (
        <div className="w-full relative">
            {
                Loading ? <div>Loading...</div> : <Carousel
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
    )
}

export default NewsCarousel