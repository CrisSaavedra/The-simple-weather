import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";


export const SearchBar = ({ cities, setCities }) => {

    const [search, setSearch] = useState('');

    const element = document.getElementById("search");

    const onSearch = async (e) => {
        const value = e.target.value;
        if (e.key === 'Enter') {
            let { main, weather } = await useFetch(value);
            if (main && weather) {
                setCities([...cities, search]);
                console.log(search)

            } else {
                console.log('city doesnt exist')
            }
            
            setSearch('');
            e.target.value = '';
        }


    }

    const onChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    const onValue = () => {

        if (element != null && element.value != '') {
            element.classList.remove("bg-search");
            return;
        }

        if (element != null && element.value === '') {
            element.classList.add("bg-search");
            return;
        }
    }




    useEffect(() => {

        onValue();
    }, [search]);




    return (
        <div className="text-neutral-400 text-4xl flex flex-col items-center pt-20 ">
            <div className=" bg-neutral-800  xl:container flex justify-center">
                <input id="search" onChange={e => onChange(e)} onKeyDown={e => onSearch(e)} type="search" className="bg-neutral-800 h-20 xl:w-1/2 bg-search bg-no-repeat bg-left bg-10% xl:bg-5% outline-none focus:outline-none focus:bg-none focus:scale-110  hover:border-neutral-700  border-b border-neutral-700 transition-all ease-out  duration-500" />
            </div>

        </div>
    )
}
