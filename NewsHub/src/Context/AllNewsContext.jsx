import { fetchSearchedCategoty, fetchAllCategoty, fetchBusinessCategoty, fetchEntertainmentCategoty, fetchHealthCategoty, fetchScienceCategoty, fetchSportsCategoty, fetchTechnologyCategoty} from '@/services/DataServices';
import { createContext, useEffect, useState } from 'react'

export const AllNewsContext = createContext();
export const BusinessNewsContext = createContext();
export const EntertainmentNewsContext = createContext();
export const HealthNewsContext = createContext();
export const ScienceNewsContext = createContext();
export const SportsNewsContext = createContext();
export const TechNewsContext = createContext();
export const SearchedNewsContext = createContext();


export const AllNewsProvider = ({ children }) => {

    const [AllNewsData, setAllData] = useState([]);
    const [AllLoading, setLoading] = useState(true);
    const [carouselData, setCarousel] = useState([]);
    

    const fetchAllNews = async () => {

        try {
            let data = await fetchAllCategoty();
            let newdata = data.articles;
            
            console.log(newdata);
            setAllData(newdata);
            setCarousel([newdata[0], newdata[1], newdata[2]]);

        } catch (error) {

            console.log(error);
            setAllData([]);

        }finally{
            setLoading(false);
        }
    };
    

    return (
        <AllNewsContext.Provider value={{ AllNewsData, setAllData, AllLoading, carouselData, fetchAllNews }} >
            {children}
        </AllNewsContext.Provider>
    )

}


export const BusinessNewsProvider = ({ children }) => {

    const [BusinessNewsData, setBusinessData] = useState([]);
    const [BusinessLoading, setLoading] = useState(true);
    const [carouselData, setCarousel] = useState([]);

    const fetchBusinessNews = async () => {

        try {
            let data = await fetchBusinessCategoty();
            let newdata = data.articles;
            
            console.log(newdata);
            setBusinessData(newdata);
            setCarousel([newdata[0], newdata[1], newdata[2]]);

        } catch (error) {

            console.log(error);
            setBusinessData([]);

        }finally{
            setLoading(false);
        }
    };
    

    return (
        <BusinessNewsContext.Provider value={{ BusinessNewsData, setBusinessData, BusinessLoading, carouselData, fetchBusinessNews }} >
            {children}
        </BusinessNewsContext.Provider>
    )

}


export const TechNewsProvider = ({ children }) => {

    const [TechNewsData, setTechData] = useState([]);
    const [TechLoading, setLoading] = useState(true);
    const [carouselData, setCarousel] = useState([]);

    const fetchTechNews = async () => {

        try {
            let data = await fetchTechnologyCategoty();
            let newdata = data.articles;
            
            console.log(newdata);
            setTechData(newdata);
            setCarousel([newdata[0], newdata[1], newdata[2]]);

        } catch (error) {

            console.log(error);
            setTechData([]);

        }finally{
            setLoading(false);
        }
    };

    return (
        <TechNewsContext.Provider value={{ TechNewsData, setTechData, TechLoading, carouselData, fetchTechNews }} >
            {children}
        </TechNewsContext.Provider>
    )

}



export const HealthNewsProvider = ({ children }) => {

    const [HealthNewsData, setHealthData] = useState([]);
    const [HealthLoading, setLoading] = useState(true);
    const [carouselData, setCarousel] = useState([]);

    const fetchHealthNews = async () => {

        try {
            let data = await fetchHealthCategoty();
            let newdata = data.articles;
            
            console.log(newdata);
            setHealthData(newdata);
            setCarousel([newdata[0], newdata[1], newdata[2]]);

        } catch (error) {

            console.log(error);
            setHealthData([]);

        }finally{
            setLoading(false);
        }
    };


    return (
        <HealthNewsContext.Provider value={{ HealthNewsData, setHealthData, HealthLoading, carouselData, fetchHealthNews }} >
            {children}
        </HealthNewsContext.Provider>
    )

}



export const SportsNewsProvider = ({ children }) => {

    const [SportsNewsData, setSportsData] = useState([]);
    const [SportsLoading, setLoading] = useState(true);
    const [carouselData, setCarousel] = useState([]);

    const fetchSportsNews = async () => {

        try {
            let data = await fetchSportsCategoty();
            let newdata = data.articles;
            
            console.log(newdata);
            setSportsData(newdata);
            setCarousel([newdata[0], newdata[1], newdata[2]]);

        } catch (error) {

            console.log(error);
            setSportsData([]);

        }finally{
            setLoading(false);
        }
    };
    

    return (
        <SportsNewsContext.Provider value={{ SportsNewsData, setSportsData, SportsLoading, carouselData, fetchSportsNews }} >
            {children}
        </SportsNewsContext.Provider>
    )

}





export const EntertainmentNewsProvider = ({ children }) => {

    const [EntertainmentNewsData, setEntertainmentData] = useState([]);
    const [EntertainmentLoading, setLoading] = useState(true);
    const [carouselData, setCarousel] = useState([]);

    const fetchEntertainmentNews = async () => {

        try {
            let data = await fetchEntertainmentCategoty();
            let newdata = EntertainmentNewsData.concat(data.articles);
            
            console.log(newdata);
            setEntertainmentData(newdata);
            setCarousel([newdata[0], newdata[1], newdata[2]]);

        } catch (error) {

            console.log(error);
            setEntertainmentData([]);

        }finally{
            setLoading(false);
        }
    };
    

    return (
        <EntertainmentNewsContext.Provider value={{ EntertainmentNewsData, setEntertainmentData, EntertainmentLoading, carouselData, fetchEntertainmentNews }} >
            {children}
        </EntertainmentNewsContext.Provider>
    )

}





export const ScienceNewsProvider = ({ children }) => {

    const [ScienceNewsData, setScienceData] = useState([]);
    const [ScienceLoading, setLoading] = useState(true);
    const [carouselData, setCarousel] = useState([]);

    const fetchScienceNews = async () => {

        try {
            let data = await fetchScienceCategoty();
            let newdata = ScienceNewsData.concat(data.articles);
            
            console.log(newdata);
            setScienceData(newdata);
            setCarousel([newdata[0], newdata[1], newdata[2]]);

        } catch (error) {

            console.log(error);
            setScienceData([]);

        }finally{
            setLoading(false);
        }
    };


    return (
        <ScienceNewsContext.Provider value={{ ScienceNewsData, setScienceData, ScienceLoading, carouselData, fetchScienceNews }} >
            {children}
        </ScienceNewsContext.Provider>
    )

}

export const SearchedNewsProvider = ({ children }) => {

    const [SearchedNewsData, setSearchedData] = useState([]);
    const [SearchedLoading, setLoading] = useState(true);
    const [carouselData, setCarousel] = useState([]);

    const fetchSearchedNews = async (query) => {

        try {
            let data = await fetchSearchedCategoty(query);
            let newdata = data.articles;
            
            console.log(newdata);
            setSearchedData(newdata);
            setCarousel([newdata[0], newdata[1]]);

        } catch (error) {

            console.log(error);
            setSearchedData([]);

        }finally{
            setLoading(false);
        }
    };


    return (
        <SearchedNewsContext.Provider value={{ SearchedNewsData, setSearchedData, SearchedLoading, carouselData, fetchSearchedNews }} >
            {children}
        </SearchedNewsContext.Provider>
    )

}




