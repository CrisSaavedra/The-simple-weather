
import { useState } from 'react';
import logo from './assets/TheWeather.svg';
import { SearchBar } from './components/searchbar/SearchBar';

function TheWeather() {

  const [cities, setCities] = useState([]);

  return (

    <div className="min-h-screen bg-neutral-800">

      <div className=" mx-auto  w-11/12 ">
        <div className="flex flex-col items-center bg-neutral-800 ">
          <h3 className='text-5xl xl:text-7xl mt-20 font-font1 font-extralight text-neutral-400'> The weather</h3>
        </div>
    
        <SearchBar cities ={cities} setCities={setCities} />

      </div>

    </div>
  )
}

export default TheWeather;
