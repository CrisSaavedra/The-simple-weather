export const useWhatDay = (whatDay) => {

    let date = new Date(whatDay)
    if (date.getDay() === 0) {
        return ('Monday')
    }else
    if (date.getDay() === 1) {
        return ('Tuesday');
    }else
    if (date.getDay() === 2) {
        return ('Wednesday');
    }else
    if (date.getDay() === 3) {
        return('Thursday');
    }else
    if (date.getDay() === 4) {
        return ('Friday');
    }else
    if (date.getDay() === 5) {
        return ('Saturday');
    }else
    if (date.getDay() === 6) {
        return('Sunday');
    }


    return null;
}