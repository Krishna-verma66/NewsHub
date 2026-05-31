import { useContext } from 'react'
import { SavedDataContext } from '../../Context/NewsDataContext'
import { NewsContext } from '../../Context/NewNewsContext'
import { ViewNewsContext } from '../../Context/ViewNewsContext'






const Recommended = () => {


  const { savedData, setData, fetchNews } = useContext(SavedDataContext);
  const { newNewsData, setNewData, Loading, fetchNewNews } = useContext(NewsContext);
  const { viewData, setviewData } = useContext(ViewNewsContext);



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

    newNewsData.forEach((item) => {
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

    newNewsData.forEach((item) => {
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
    <div className='flex w-full mt-6 flex-col'>
      <div className='flex items-center justify-between w-full poppins'>
        <h1 className='font-medium text-sm'>Recommended For You</h1>
        <button className='font-medium text-xs text-gray-600'>View All</button>
      </div>
      {
        newNewsData.map((item) => (
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
  )
}

export default Recommended