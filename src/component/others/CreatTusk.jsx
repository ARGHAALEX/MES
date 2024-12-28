import React from 'react'

const CreatTusk = () => {
  return (
    <div>
      <div className="mt-6 bg-slate-900 p-3 rounded-xl">
        <form className="flex w-full flex-wrap  items-start justify-between">
          <div className="w-1/2 ">
            <div className="mt-3">
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 "
                type="text"
                placeholder="Make the Subject of tusk"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500"
                type="date"
                name=""
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500"
                type="text"
                placeholder="Employ Name"
              />
            </div>
            <div className="mt-4">
              {" "}
              <h3 className="">Catagory</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500"
                type="text"
                placeholder="Design / Dev /Etc."
              />
            </div>
          </div>

          <div className="w-1/2">
            <h3 className="text-center text-gray-500">Description </h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-500"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="mt-4">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Create Tusk
                </span>
                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatTusk