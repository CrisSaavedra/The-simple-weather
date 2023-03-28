import axios from 'axios';


export const useFetch = async (input) => {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=SFT8UDGBCFW254FBXLLKA6FCZ&contentType=json`;

    const getData = async () => {
        const res2 = await axios.get(URL)
            .then(res => res.data)
            .catch(error => false)
        
        return res2
    }

    const { days } = await getData()

    const sevenDays = days.slice(0,6);

    return {
       sevenDays
    }

}
