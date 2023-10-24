import React from 'react'
import Dropdown from './dropdown2';

const dropdowns = [
    {
        title: 'How fast can I expect delivery on my requests?',
        content: 'We aim to deliver new designs within 1-3 days on average. Depending on the complexity of your request, we may break it down into milestones to ensure timely delivery.'
    },
    {
        title: 'Can other people from the company submit design requests?',
        content: 'Of course! You can add as many team members as you like to your design board. All teammates will need to use the same design queue.'
    },
    {
        title: "Why wouldn't I just hire a full- time designer ?",
        content: "Hiring a full-time senior-level designer can cost you over $100,000 annually, not to mention the struggle of finding one available. Moreover, keeping them on board even when not much work is available is an added expense. That's why our monthly plan provides you with more flexibility. You can pause and resume your subscription anytime you like. This allows you to pay your designer only for the work you have available, and not for the time you aren't utilizing. "
    },
    {
        title: 'I don’t have multiple design needs. Can I make a single request?',
        content: "After completing your first design request, you've got complete control over your subscription. Pause it anytime whenever you need to take time off. You can resume your subscription effortlessly whenever you feel ready and have a new design request in mind.",
    },
    {
        title: 'What tools do you use for designs?',
        content: "Don’t worry about keeping up with the latest design and tech. We use Figma, Framer, Webflow, Notion, and AI tools to stay ahead of the curve."
    },
    {
        title: 'What is your refund policy?',
        content: "Once design work has started, we don't provide money-back guarantees. However, if you're not satisfied with our service, please contact us, and we'll do our best to address your concerns and provide the right solutions."
    }
]
const Faq = () => {
    return (
        <div className='pt-10 mx-2 md:mx-4 lg:ml-6 xl:mr-8 xl:ml-0 border border-black border-opacity-5'>
            <div className="flex justify-between">
                <h2 className="font-bold ml-6 text-xl">FAQs</h2>
                <button className="text-white bg-[#2e2e2e] md:hidden mr-6 rounded-md px-3 py-2 font-bold">
                    Get started
                </button>
            </div>
            <div className='p-5 border mt-8'>
                {dropdowns.map((drop, index) => (
                    <Dropdown title={drop.title} content={drop.content} />
                ))}
            </div>
        </div>
    )
}

export default Faq;