import { fetchNews } from '@/services/DataServices';
import { createContext, useEffect, useState } from 'react'

export const NewsContext = createContext();


export const NewNewsProvider = ({ children }) => {

    const [newNewsData, setNewData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [carouselData, setCarousel] = useState([]);


    const fetchNewNews = async () => {

        try {

            let data = await fetchNews();

            let newdata = data.articles;
            
            console.log(newdata);
            setNewData(newdata);
            setCarousel([newdata[0], newdata[1], newdata[2]]);

        } catch (error) {

            console.log(error);
            setNewData([]);

        }finally{
            setLoading(false);
        }
    };

    

    return (
        <NewsContext.Provider value={{ newNewsData, setNewData, Loading, setLoading, carouselData, fetchNewNews }} >
            {children}
        </NewsContext.Provider>
    )

}