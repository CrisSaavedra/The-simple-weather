
import clearDay from '../assets/weatherIcons/clear-day.svg';
import clearNight from '../assets/weatherIcons/clear-nigth.svg';
import cloudy from '../assets/weatherIcons/cloudy.svg';
import fog from '../assets/weatherIcons/fog.svg';
import partlyDay from '../assets/weatherIcons/partly-cloudy-day.svg';
import partlyNight from '../assets/weatherIcons/partly-cloudy-nigth.svg';
import rain from '../assets/weatherIcons/rain.svg';
import snow from '../assets/weatherIcons/snow.svg';
import wind from '../assets/weatherIcons/wind.svg';

export const useIcon = (iconRecomended) => {

 
    if(iconRecomended === 'snow'){
        return snow;
    }else{
        if(iconRecomended === 'wind'){
            return wind;
        }else{
            if(iconRecomended === 'rain'){
                return rain;
            }else{
                if(iconRecomended === 'partly-cloudy-night'){
                    return partlyNight;
                }else{
                    if(iconRecomended === 'partly-cloudy-day'){
                        return partlyDay;
                    }else{
                        if(iconRecomended === 'fog'){
                            return fog;
                        }else{
                            if(iconRecomended === 'cloudy'){
                                return cloudy;
                            }else{
                                if(iconRecomended === 'clear-nigth'){
                                    return clearNight;
                                }else{
                                    if(iconRecomended === 'clear-day'){
                                        return clearDay;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


  return null;
}
