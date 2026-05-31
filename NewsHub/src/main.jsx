
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SavedProvider } from './Context/NewsDataContext.jsx'
import { NewNewsProvider } from './Context/NewNewsContext.jsx'
import { ViewNewsProvider } from './Context/ViewNewsContext.jsx'
import { SearchedNewsProvider, AllNewsProvider, ScienceNewsProvider, HealthNewsProvider, EntertainmentNewsProvider, SportsNewsProvider, TechNewsProvider, BusinessNewsProvider } from './Context/AllNewsContext.jsx'

createRoot(document.getElementById('root')).render(
  <AllNewsProvider>
    <ScienceNewsProvider>
      <HealthNewsProvider>
        <EntertainmentNewsProvider>
          <SportsNewsProvider>
            <TechNewsProvider>
              <BusinessNewsProvider>
                <NewNewsProvider>
                  <ViewNewsProvider>
                    <SavedProvider>
                      <SearchedNewsProvider>
                        <App />
                      </SearchedNewsProvider>
                    </SavedProvider>
                  </ViewNewsProvider>
                </NewNewsProvider>
              </BusinessNewsProvider>
            </TechNewsProvider>
          </SportsNewsProvider>
        </EntertainmentNewsProvider>
      </HealthNewsProvider>
    </ScienceNewsProvider>
  </AllNewsProvider>


)
