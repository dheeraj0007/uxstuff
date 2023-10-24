import React from 'react'
import Dropdown from './dropdown'

const PaymentButtons = () => {
    return (
        <React.Fragment>
            <div className='flex'>
                <div className='w-[50%] flex flex-col px-4 border-2 border-opacity-10 py-5 space-y-4'>
                    <div>
                        <p>Monthly <span className='font-semibold'>$4995</span></p>
                        <p className='text-xs mt-2'>Pause of cancel anytime</p>
                    </div>
                    <div className='font-bold text-white bg-[#343434] text-center rounded-sm py-2'>
                        First 7 days FREE!
                    </div>
                </div>
                <div className='w-[50%] flex flex-col px-4 border-y-2 py-5 space-y-4'>
                    <div>
                        <p>Still not sure!</p>
                        <p className='text-xs mt-2 truncate'>Book a 15-minute call to get acquainted. </p>
                    </div>
                    <div className='font-bold text-white bg-[#343434] text-center rounded-sm py-2'>
                        Book a call
                    </div>
                </div>
            </div>

            <Dropdown />
        </React.Fragment>
    )
}

export default PaymentButtons
