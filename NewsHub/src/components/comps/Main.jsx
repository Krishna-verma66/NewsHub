import { useContext } from 'react'
import { NewsContext } from '../../Context/NewNewsContext'
import { Outlet } from 'react-router-dom'
import { ViewNewsContext } from '../../Context/ViewNewsContext'
import { MoveRight } from 'lucide-react'

const Main = () => {

  const { viewData, setviewData } = useContext(ViewNewsContext);

  let isData = viewData !== null ;

  return (
    <div className='w-4/5 h-full flex'> 
      
      <Outlet />

      <div className='w-[40%] h-full py-8 px-4'>
        {
          isData? <div className='w-full h-full rounded-lg overflow-hidden border'>
          <div className='w-full h-[40%]'>
            <img className='w-full h-full object-cover' src={viewData.image} />
          </div>
          <div className='flex flex-col gap-2 px-2 py-4 w-full h-[60%] overflow-y-scroll no-scrollbar will-change-scroll poppins'>

            <p className='w-full font-medium text-xs flex justify-between items-center'>
              <span className='text-gray-500'>{viewData.publishedAt.split('T')[0]}</span>
              <span className='text-blue-500'>{viewData.source.name}</span>
            </p>

            <h1 className='text-lg font-semibold'>{viewData.description}</h1>
            <p className='text-sm font-medium text-gray-700'>
              {viewData.content}
            </p>

            <a className='flex gap-2 justify-center items-center text-sm text-white font-medium px-3 py-1 bg-blue-600 rounded-lg mt-5 w-1/3' href={viewData.url} target='_blank'><span>Source</span> <MoveRight /></a>
          </div>
        </div>:<h1 className='poppins text-xl font-semibold mt-20'>Select a news to read</h1>
        }
      </div>
    </div>
  )
}

export default Main