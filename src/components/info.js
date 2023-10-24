import React from "react";

const Info = () => {
  return (
    <div className="pt-10 mx-2 md:mx-4 lg:ml-6 xl:mr-8 xl:ml-0 border-l-0 border-x-2 border-black border-opacity-5">
      <div className="">
        <h2 className="ml-6 text-xl font-bold ">What do you get?</h2>
        <div className="flex flex-col md:flex-row mt-10 border">
          <div className="w-full md:w-[65%]">
            <ul className="space-y-3 border-collapse text-sm py-6 pl-5 h-68 text-[#626262]">
              <li>
                <span className="font-bold mr-2 text-black">001</span> Fixed
                monthly cost
              </li>
              <li>
                <span className="font-bold mr-2 text-black">002</span>
                Unlimited design requests & revisions
              </li>
              <li>
                <span className="font-bold mr-2 text-black">003</span> No
                strings, no contracts
              </li>
              <li>
                <span className="font-bold mr-2 text-black">004</span> No calls
                or meetings
              </li>
              <li>
                <span className="font-bold mr-2 text-black">005</span> Simple
                fixed monthly cost
              </li>
              <li>
                <span className="font-bold mr-2 text-black">006</span>
                High quality guaranteed
              </li>
              <li>
                <span className="font-bold mr-2 text-black">007</span> Fast and
                efficient delivery
              </li>
            </ul>
          </div>
          {/* add on */}
          <div className="flex flex-col justify-around items-start border border-collapse w-full md:w-[35%] py-6 px-5 pr-10 space-y-3">
            <button className="text-sm text-[#4E55FE] bg-[#DFE6F8] px-2 py-1 rounded-md">
              Add on
            </button>
            <div>
              <h2 className="font-bold text-sm">AI enabled</h2>
              <p className="text-sm">
                At no extra cost, we use AI to streamline our work, from
                Midjourney to ChatGPT.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-sm">Design system approach</h2>
              <p className="text-sm">
                We use a modular design strategy that empowers your developers
                to build with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="flex justify-between">
          <h2 className="font-bold ml-6 text-xl">What we do?</h2>
          <button className="text-white bg-[#2e2e2e] md:hidden mr-6 rounded-md px-3 py-2 font-bold">
            Get started
          </button>
        </div>
        <div className="grid grid-cols-3 border p-5 py-8 justify-between mt-8 text-xs md:text-sm text-[#626262]">
          <div>
            <ul className="space-y-3">
              <li>Interface Design</li>
              <li>Website Design</li>
              <li>UX Design</li>
              <li>Landing pages</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li>Design systems</li>
              <li>SASS Design</li>
              <li>App design</li>
              <li>Wireframes</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li>MVPs</li>
              <li>No-Code Setup</li>
              <li>Email Design</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-7 text-[#626262] text-sm space-y-5">
        <div className="flex flex-wrap space-x-4">
          <p className="flex bg-gray-50">
            <img
              src="https://framerusercontent.com/images/FM1EwOFfdnMqxbDDZzvIcCGyA.png?scale-down-to=512"
              alt=""
              className="w-6 h-6 rounded-md object-cover"
            />
            <span className="ml-2">Design collaboration in Figma</span>
          </p>
          <p className="flex bg-gray-50 mt-4 md:mt-0">
            <img
              src="https://framerusercontent.com/images/0AHJUOhOJ3XgCg8saNxZyU4hA.png"
              alt=""
              className="w-6 h-6 rounded-md object-cover"
            />
            <span className="ml-2">Webflow website</span>
          </p>
          <p className="flex bg-gray-50 mt-4 md:mt-0">
            <img
              src="https://framerusercontent.com/images/9AQrg74Iqq5Wma5XoepGOzDjmk.png"
              alt=""
              className="w-6 h-6 rounded-md object-cover"
            />
            <span className="ml-2">Framer website</span>
          </p>
        </div>
        <div className="space-y-1">
          <p>Looking for a service that's not listed?</p>
          <p>
            <span className="text-[#DF52FF]">Let's connect</span> and have a
            conversation about whether I can offer the service you're looking
            for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
