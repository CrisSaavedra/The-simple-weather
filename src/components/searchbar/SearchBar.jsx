import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";


export const SearchBar = ({ cities, setCities }) => {




    const onSearch = async (e) => {
        const value = e.target.value.toLowerCase();
        clearSuggestions();
        onValue();
        mangerData(value);


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

    const mangerData = (value) => {
        const list = document.getElementById("cities");

        let sortedData = cities.sort();
        for (let i of sortedData) {
            let copyI = i.replace(/\s+/g, '');
            let copyVal = value.replace(/\s+/g, '');
            if (value != '' && copyI.includes(copyVal)) {
                let listItem = document.createElement("a");
                listItem.style.cursor = "pointer";
                listItem.innerHTML = i;
                listItem.className = 'pb-2 focus:'
                listItem.onclick = e => onClickOption(e);
                if (list) {
                    list.appendChild(listItem);
                }
            }
        }
    }

    const onClickOption = (e) => {
        const element = document.getElementById("search");
        element.value = e.target.innerHTML;
        clearSuggestions();
    }

    const clearSuggestions = () => {
        const list = document.getElementById("cities");

        if (list) {
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
        }
    }



    const onClickOutside = (e) => {
        clearSuggestions();
    }

    useEffect(() => {
        document.addEventListener('click', e => {
            console.log(e.target.id)
            if (!e.target.id === 'search' || e) {
                clearSuggestions();
            }
        })

    }, []);



    return (
        <div className="text-neutral-400 text-4xl flex flex-col items-center mt-20 group w-7/12 mx-auto">
            <div className="z-20 bg-neutral-800  xl:container flex flex-col  items-center transition-all ease-out  duration-500">
                <input id="search" onKeyUp={e => onSearch(e)} type="search" className="group bg-neutral-800 h-20 xl:w-1/2 bg-search bg-no-repeat bg-left bg-10% xl:bg-5% outline-none focus:outline-none focus:bg-none  hover:border-neutral-700  border-b border-neutral-700 
                focus:scale-110 transition-all ease-out  duration-500s" />
            </div>
            <div className="fixed pt-20 w-7/12 flex justify-center group-hover:scale-100 mt-1 transition-all ease-out duration-500">
                <ul id="cities" className="sticky w-11/12 top-0 mt-1 max-h-40  overflow-hidden bg-neutral-900 bg-brightness-100 opacity-90 text-neutral-400 flex flex-col  transition-all ease-out  duration-500">

                </ul>
            </div>


            <div>
                <h2>este es otro componente</h2>
                <a href="#" id="dos">tienefocus?</a>
            </div>


        </div>
    )
}
