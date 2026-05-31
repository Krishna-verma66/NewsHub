import './App.css'
import Header from './components/comps/Header'
import Main from './components/comps/Main'
import SideBar from './components/comps/SideBar'
import { Button } from './components/ui/button'
import Saved from './components/comps/Saved'
import Home from './components/comps/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './components/comps/All'
import Business from './components/comps/Business'
import Tech from './components/comps/Tech'
import Health from './components/comps/Health'
import Sports from './components/comps/Sports'
import Entertainment from './components/comps/Entertinment'
import Science from './components/comps/Science'
import Search from './components/comps/Search'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col w-screen h-screen overflow-hidden'>
          <Header />
          <div className='w-full h-[92%] flex'>
            <SideBar />
            <Routes>
              <Route element={<Main />}>
                <Route path='/' element={<Home />} />
                <Route path='/saved' element={<Saved />} />
                <Route path='/all' element={<All />} />
                <Route path='/business' element={<Business />} />
                <Route path='/tech' element={<Tech />} />
                <Route path='/health' element={<Health />} />
                <Route path='/sports' element={<Sports />} />
                <Route path='/entertainment' element={<Entertainment />} />
                <Route path='/science' element={<Science />} />
                <Route path='/search' element={<Search />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
