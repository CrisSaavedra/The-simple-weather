import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";


export const SearchBar = ({ cities, setCities, setDays }) => {

    const onSearch = async (e) => {
        
        const search = document.getElementById("search");
        const value = e.target.value.toLowerCase();
        clearSuggestions();
        onValue(search);

        if (e.key === 'Enter') {
            addAnimation()
            addEventeAnimation(e);

        } else {
            mangerData(value);
        }
    }

    const addEventeAnimation = (e) => {
        const display = document.getElementById('days');
        if (display) {
            display.addEventListener('animationend', () => {
                setDays({
                    search: null,
                    data: null,
                    loading: true,
                })
                setData(e.target.value.toLowerCase());
                e.target.value = '';
            })

            display.removeEventListener('animationend', null);

        }else{
            setDays({
                search: null,
                data: null,
                loading: true,
            })
            setData(e.target.value.toLowerCase());
            e.target.value = '';
        }


    }

    const addAnimation = () => {
        const display = document.getElementById('days');
        if (display) {
            display.classList.remove('animate-load');
            display.classList.add('animate-out');
        }
    }


    const setData = async (value) => {
        let { sevenDays } = await useFetch(value);
        if (sevenDays) {
            let city = cities.find(c => c.toLowerCase() === value);
            if (!city) {
                setCities([...cities, value]);
            }

            setDays({
                search: value,
                data: sevenDays,
                loading: false,
            });
            clearSuggestions();
            onValue();

        } else {
            console.log('search not found');
            setDays({
                search: false,
                data: false,
                loading: false,
            });
        }
    }

    const onValue = (element) => {

        if (element != null && element.value != '') {
            element.classList.remove("bg-search");

        } else if (element != null && element.value === '') {
            element.classList.add("bg-search");

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
                listItem.className = 'pb-2 pl-2'
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
        element.focus();
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

    const eventListener = () => {
        document.addEventListener('click', e => {
            if (!e.target.id === 'search' || e) {
                clearSuggestions();
                onValue();
            }
        })
    }



    useEffect(() => {
        eventListener();
        setData('santiago');
    }, []);



    return (
        <div className="relative text-neutral-400 text-4xl flex flex-col items-center mt-20 group mx-auto">
            <div className="z-20 bg-neutral-800 w-11/12 xl:w-10/12  xl:container flex flex-col  items-center transition-all ease-out  duration-500">
                <input id="search" onKeyUp={e => onSearch(e)} type="search" className="group bg-neutral-800 h-20 w-9/12 xl:w-1/2 bg-search bg-no-repeat bg-left bg-10% sm:bg-5% outline-none focus:outline-none focus:bg-none  hover:border-neutral-700  border-b border-neutral-700 
                focus:scale-110 transition-all ease-out  duration-500 " autoComplete="true" />
            </div>
            <div className="absolute max-w-screen-2xl pt-20 w-11/12 xl:w-10/12 flex justify-center  mt-1 transition-all ease-out duration-500">
                <ul id="cities" className="sticky w-9/12 scale-110 xl:w-1/2  top-0 mt-1 max-h-40  overflow-hidden bg-neutral-900 bg-brightness-100 opacity-80 text-neutral-400 flex flex-col overflow-y-scroll "></ul>
            </div>
        </div>
    )
}
