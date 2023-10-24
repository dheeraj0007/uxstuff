import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import DoneIcon from '@mui/icons-material/Done';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonText = "Show Details";
    return (
        <div className="">
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm  text-gray-700 font-bold"
            >
                {!isOpen ? buttonText : "Hide Details"}
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
                            <p className="block px-4 py-2 text-sm text-gray-700 bg-gray-50 pt-10">After subscribing, we will send you a welcome email and a Trello board invite to manage your design requests. You're free to invite your entire team to jump in and get started straight away. Let's begin creating together!
                                <ul className='mt-10 space-y-1'>
                                    <li><DoneIcon />Unlimited UX & UI design</li>
                                    <li><DoneIcon />Unlimited revisions</li>
                                    <li><DoneIcon />Unlimited users</li>
                                    <li><DoneIcon />Dedicated Slack workspace for all your team</li>
                                    <li><DoneIcon />One request at a time</li>
                                    <li><DoneIcon />Easy credit-card payments</li>
                                </ul></p>
                        </div>
                    </div >
                )}
            </Transition >
        </div >
    );
};

export default Dropdown;
