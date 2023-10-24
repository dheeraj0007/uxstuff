import React from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
const Process = () => {
    return (
        <div className='pt-16 mx-2 md:mx-4 lg:ml-6 xl:mr-8 xl:ml-0  border-x-2 border-black border-opacity-5'>
            <h2 className='text-xl font-bold ml-6'>What's the process?</h2>
            <div className='mt-10 flex flex-col md:flex-row'>
                <div className='w-full md:w-[33.3%]'>
                    <p className='md:h-32 text-sm border  border-l-0 py-6 lg:h-36 lg:py-10 px-2 md:px-6 flex flex-row md:flex-col'><WidgetsIcon /><span className='ml-4 md:ml-0'>Subscribe, request as many designs as you’d like</span></p>
                </div>
                <div className='w-full md:w-[33.3%]'>
                    <p className='md:h-32 text-sm border py-6 lg:h-36 lg:py-10 px-2 md:px-6 flex flex-row md:flex-col'><HdrStrongIcon /> <span className='ml-4 md:ml-0'>Get your design in a few business days on average </span> </p>
                </div>
                <div className='w-full md:w-[33.3%]'>
                    <p className='md:h-32 text-sm border border-r-0 py-6 lg:h-36 lg:py-10 px-2 md:px-6 flex flex-row md:flex-col'><SentimentSatisfiedAltIcon /><span className='ml-4 md:ml-0'> We work closely with you to ensure nothing less than 100% satisfaction </span></p>
                </div>
            </div>
        </div>
    )
}

export default Process
