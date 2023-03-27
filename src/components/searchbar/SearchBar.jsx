import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";


export const SearchBar = ({ cities, setCities }) => {

    const [search, setSearch] = useState('');
    const [machCities, setMachCities] = useState([]);

    document.addEventListener('click', (e) => {
        const list = document.getElementById("cities");
        if (e.target != list) {
            if (list ) {
                while (list.firstChild) {
                    list.removeChild(list.firstChild);
                }
            }
        }

    })


    const onSearch = async (e) => {
        const value = e.target.value;
        console.log(value) // no se imprime la primara vez
        mangerData(e.target.value);

        if (e.key === 'Enter') {
            let { main, weather } = await useFetch(value);
            if (main && weather) {
                setCities([...cities, value]);

            } else {
                console.log('city doesnt exist')
            }

            setSearch('');
            e.target.value = '';
        }


    }



    const mangerData = (value) => {
        const list = document.getElementById("cities");
        let sortedData = cities.sort();
        for (let i of sortedData) {
            if (value != '' && i.startsWith(value)) {
                let listItem = document.createElement("li");
                listItem.style.cursor = "pointer";
                listItem.innerHTML = i;
                if (list) {
                    list.appendChild(listItem);
                }


            }
        }


    }

    const onValue = () => {
        const element = document.getElementById("search");

        if (element != null && element.value != '') {
            element.classList.remove("bg-search");
            return;
        }

        if (element != null && element.value === '') {
            element.classList.add("bg-search");
            return;
        }
    }





    return (
        <div className="text-neutral-400 text-4xl flex flex-col items-center pt-20 ">
            <div className=" bg-neutral-800  xl:container flex flex-col items-center">
                <input id="search" onKeyDown={e => onSearch(e)} type="search" className="bg-neutral-800 h-20 xl:w-1/2 bg-search bg-no-repeat bg-left bg-10% xl:bg-5% outline-none focus:outline-none focus:bg-none focus:scale-110  hover:border-neutral-700  border-b border-neutral-700 transition-all ease-out  duration-500" />
            </div>
            <ul id="cities" className="bg-neutral-20 w-4/5 px-2 pt-4">

            </ul>

        </div>
    )
}
