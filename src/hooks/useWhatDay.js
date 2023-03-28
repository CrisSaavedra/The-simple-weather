export const useWhatDay = (whatDay) => {

    let date = new Date(whatDay)
    let day = null;
    if (date.getDay() === 1) {
        day = ('Monday')
    }else
    if (date.getDay() === 2) {
        day = ('Tuesday');
    }else
    if (date.getDay() === 3) {
        day = ('Wednesday');
    }else
    if (date.getDay() === 4) {
        day = ('Thursday');
    }else
    if (date.getDay() === 5) {
        day = ('Friday');
    }else
    if (date.getDay() === 6) {
        day = ('Saturday');
    }else
    if (date.getDay() === 7) {
        day = ('Sunday');
    }


    return { day }
}