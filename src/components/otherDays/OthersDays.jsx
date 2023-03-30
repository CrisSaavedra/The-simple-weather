import { useIcon } from "../../hooks/useIcon"
import { useWhatDay } from "../../hooks/useWhatDay"


export const OthersDays = ({ days }) => {


    return (
        <>
            {
                days.map(day => {

                    day.conditions = day.conditions.split(',');

                    if (day.datetime != days[0].datetime) {
                        return (
                            <div className=" flex flex-col items-center text-neutral-500 font-normal" key={day.datetime}>
                                <div className='flex justify-center'>
                                    <h3 className='text-xl sm:text-3xl '>{useWhatDay(day.datetime)}</h3>
                                </div>

                                <img className='w-16 sm:w-28  mt-8  icon-color' src={useIcon(day.icon)} />
                                <div className='flex items-end justify-center w-56 mt-4 gap-4'>
                                    <p className='text-xl sm:text-4xl'>{day.tempmax + '°'}</p>
                                    <p className='text-lg sm:text-3xl'>{day.tempmin + '°'}</p>
                                </div>
                                <div className='mt-1'>
                                    <h4 className='font-normal text-lg sm:text-3xl'>{ day.conditions.length > 1? day.conditions[0] +','+ day.conditions[1] : day.conditions}</h4>
                                </div>
                            </div>
                        )
                    }

                })
            }

        </>

    )
}
