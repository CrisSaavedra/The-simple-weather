
import { useEffect, useState } from 'react';
import { Loader } from './components/loader/Loader';
import { SearchBar } from './components/searchbar/SearchBar';
import { SearchNotFound } from './components/searchNotFound/searchNotFound';
import { TheDay } from './components/theDay/TheDay';

//the base of data, is an example.
const citiesData = ['acapulco', 'barcelona', 'curico', 'dallas', 'egipto', 'frutillar', 'gales', 'honduras', 'irun', 'kiev', 'lota', 'madagascar', 'niebla', 'osorno', 'paris', 'quillota', 'rosario', 'santiago', 'talca', 'ugena', 'valparaiso', 'washington', 'xiannig', 'yumbel', 'zaragoza', 'santo domingo']





function TheWeather() {

  const [cities, setCities] = useState(citiesData.sort());
  const [days, setDays] = useState({
    search: '',
    data: [],
    loading: true,
  });


  return (
 
    <div className="min-h-screen bg-neutral-800  flex flex-col items-center">

      <div className=" mx-auto w-11/12  ">
        <div className="flex flex-col items-center bg-neutral-800 ">
          <h1 className='text-5xl xl:text-7xl mt-20 font-font1 font-extralight text-neutral-500 '> The weather</h1>
        </div>
        <SearchBar cities={cities} setCities={setCities} setDays={setDays} />
      </div>
      <div className='mx-auto w-11/12 flex justify-center'>

        {
          days.search != 'error' ?   days.loading ? <Loader/> : <TheDay days={days} />  : <SearchNotFound/>
        }

      </div>


    </div>
  )
}

export default TheWeather;
