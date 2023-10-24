import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';
const images = [
    {
        url: 'https://framerusercontent.com/images/U8yxBbh23lVV90616G2xYVx134.png?scale-down-to=1024',
    }
    , {
        url: 'https://framerusercontent.com/images/chrsX6zSIZleUnreBuuvGRR5kKw.png?scale-down-to=1024',
    }
    , {
        url: 'https://framerusercontent.com/images/wf5uTkRXHQH1ir3hCAaGcPv346c.png?scale-down-to=1024'
    }
    , {
        url: 'https://framerusercontent.com/images/RQir642hkPkOFxUZYkgJA0Q0.png?scale-down-to=1024',
    }
    , {
        url: 'https://framerusercontent.com/images/zWUquNiHzyrH7HYzVTY4NaWg9F0.png?scale-down-to=1024',
    }
    , {
        url: 'https://framerusercontent.com/images/QZPomFG6NIrjKyZY5ATCxFlWqA.png?scale-down-to=1024',
    },
    {
        url: 'https://framerusercontent.com/images/RCqIDPqxekrnfZKctqQxyE1E.png?scale-down-to=1024',
    }
    , {
        url: 'https://framerusercontent.com/images/Tzow8C6BrSlwJnwjGt3qiaWIQBk.png?scale-down-to=1024',
    }
]

const Recent = () => {

    return (
        <div className='pt-10 mx-2 md:mx-4 lg:ml-6 xl:mr-8 xl:ml-0 border-x-2 border-black border-opacity-5'>
            <h2 className='text-xl font-bold ml-6'>Recent Work</h2>
            <div className="grid grid-cols-2 lg:grid-cols-2 mt-8">
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image.url}
                            alt={"recent imgs"}
                            className='w-full h-full object-cover'
                        />
                    </div>
                ))}
            </div>
            <div className='h-16 bg-black text-white py-4 px-10 truncate space-x-10 font-bold hover:bg-[#DF52FF] transition  overflow-hidden '>
                <span className='w-[100%] object-contain'><FlareIcon /> See our work</span>
                <span className='w-[100%] object-contain'><FlareIcon /> See our work</span>
                <span className='w-[100%] object-contain'><FlareIcon /> See our work</span>
                <span className='w-[100%] object-contain'><FlareIcon /> See our work</span>
                <span className='w-[100%] object-contain'><FlareIcon /> See our work</span>
                <span className='w-[100%] object-contain'><FlareIcon /> See our work</span>
            </div>
        </div>
    )
}

export default Recent;
