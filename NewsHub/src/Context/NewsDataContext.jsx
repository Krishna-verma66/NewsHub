import { fetchSavedData } from '@/services/DataServices';
import { createContext, useEffect, useState } from 'react'

export const SavedDataContext = createContext();


export const SavedProvider = ({ children }) => {

    const [savedData, setData] = useState([]);


    const fetchNews = async () => {

        try {

            let data = fetchSavedData();
            setData(data);

        } catch (error) {

            console.log(error);
            setData(null);

        }
    };

    useEffect(() => {
        fetchNews();
    }, [])
    

    return (
        <SavedDataContext.Provider value={{ savedData, setData, fetchNews }} >
            {children}
        </SavedDataContext.Provider>
    )

}