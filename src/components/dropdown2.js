import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex w-full text-left first-letter:rounded-md  shadow-sm px-6 py-6 bg-[#F0EFED66] text-sm  text-gray-700 font-bold"
            >
                {props.title}
            </button>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div
                        ref={ref}
                        className=""
                    >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <p className="block px-4 text-sm text-[#626262] bg-[#F0EFED66] pt-3">{props.content}</p>
                        </div>
                    </div >
                )}
            </Transition >
        </div >
    );
};

export default Dropdown;
