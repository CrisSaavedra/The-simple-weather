import axios from 'axios';
const url1 = 'https://api.openweathermap.org/data/2.5/weather?q=';
const url2 = '&appid=18cbf5c845db29385a9c8229bdbf48f7';

export const useFetch = async (input) => {
    const newURL = url1 + input + url2;

    const getData = async () => {
        const res2 = await axios.get(newURL)
            .then(res => res.data)
            .catch(error => false)
        return res2
    }

    const { main, weather } = await getData()

    return {
        main,
        weather
    }

}
