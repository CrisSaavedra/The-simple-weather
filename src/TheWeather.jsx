
import logo from './assets/TheWeather.svg';
import { SearchBar } from './components/searchbar/SearchBar';

function TheWeather() {
  return (

    <div className="min-h-screen bg-neutral-800">

      <div className=" mx-auto  w-11/12 ">
        <div className="flex flex-col items-center bg-neutral-800 ">
          {/* <img className='mt-10' src={logo} alt="Logo the weather" width={100}/> */}
          <h3 className='text-6xl mt-20 font-font1 font-normal text-neutral-400'> The weather</h3>
        </div>
    
        <SearchBar/>

      </div>

    </div>
  )
}

export default TheWeather;
