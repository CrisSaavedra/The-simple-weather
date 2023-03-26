import { useState } from "react";




export const SearchBar = () => {


    const [search, setSearch] = useState('');

    const onSearch = (e) => {
        const target = e.target
        var element = document.getElementById("search");
        if (target.value != '') {
            element.classList.add("bg-none");
            setSearch(target.value)
        } else {
            element.classList.remove("bg-none");
        }
    }




    return (
        <div className="text-neutral-400 text-4xl flex flex-col items-center pt-20">
            <div className=" bg-neutral-800">
                <input id="search" onChange={e => onSearch(e)} type="search" className=" bg-neutral-800 h-20 bg-search bg-no-repeat bg-left bg-50% focus:outline-0 focus:bg-none focus:scale-110  hover:border-neutral-700  border-b border-neutral-700 transition-all ease-out  duration-500" />
            </div>

        </div>
    )
}
