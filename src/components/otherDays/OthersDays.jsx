

export const OthersDays = ({ days }) => {


    return (
        <>
            {
                days.map(day => {
                    if (day != days[0]) {
                        return (
                            <div className=" flex flex-col items-center text-neutral-500 font-normal">
                                <div className='flex justify-center'>
                                    <h3 className='text-3xl'>aaa</h3>
                                </div>

                                <div className='flex justify-center h-32 w-28'>
                                    <img className='w-20  mt-5' src='' />
                                </div>

                                <div className='flex items-end justify-between w-28 mt-4'>
                                    <p className='text-4xl'>32°</p>
                                    <p className='text-3xl'>16°</p>
                                </div>
                                <div className='mt-0'>
                                    <h4 className='font-normal text-2xl'>sunny</h4>
                                </div>
                            </div>

                        )
                    }
                })
            }



            {/* <div className=" flex flex-col items-center text-neutral-500 font-normal">
                <div className='flex justify-center'>
                    <h3 className='text-3xl'>Monsday</h3>
                </div>
                <div className='flex justify-center h-32 w-28 '>
                    <img className='w-20 mt-5' src={nub} />
                </div>


                <div className='flex items-end justify-between w-28 mt-4'>
                    <p className='text-4xl'>32°</p>
                    <p className='text-3xl'>16°</p>
                </div>
                <div className='mt-0'>
                    <h4 className='font-normal text-2xl'>sunny</h4>
                </div>
            </div>


            <div className=" flex flex-col items-center text-neutral-500 font-normal">
                <div className='flex justify-center'>
                    <h3 className='text-3xl'>Monsday</h3>
                </div>

                <div className='flex justify-center h-32 w-28 items-center '>
                    <img className='w-20 mt-5 ' src={lluv} />
                </div>
                <div className='flex items-end justify-between w-28 mt-4'>
                    <p className='text-4xl'>32°</p>
                    <p className='text-3xl'>16°</p>
                </div>
                <div className='mt-0'>
                    <h4 className='font-normal text-2xl'>sunny</h4>
                </div>
            </div> */}

        </>

    )
}
