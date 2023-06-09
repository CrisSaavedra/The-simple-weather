import axios from 'axios';

export const useFetch = async (input) => {

    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=SFT8UDGBCFW254FBXLLKA6FCZ&contentType=json`;



    const getData = async () => {
        const res2 = await axios.get(URL)
            .then(res => res.data)
            .catch(error => error)
        return res2;

    }


    const { days } = await getData();
    if(days=== undefined){
        const sevenDays = false;
        return {
            sevenDays
        }
    }
    const sevenDays = days.slice(0, 7);

    return {
        sevenDays,
    }

}
