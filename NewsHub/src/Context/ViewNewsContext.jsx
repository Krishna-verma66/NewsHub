
import { createContext, useEffect, useState } from 'react'

export const ViewNewsContext = createContext();


export const ViewNewsProvider = ({ children }) => {

    const [viewData, setviewData] = useState(null);
    

    return (
        <ViewNewsContext.Provider value={{ viewData, setviewData }} >
            {children}
        </ViewNewsContext.Provider>
    )

}