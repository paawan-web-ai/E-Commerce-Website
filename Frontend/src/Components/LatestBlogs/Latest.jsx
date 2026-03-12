import React from "react";

const Latest = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-center py-20">
      <div className="mb-1 text-3xl font-bold">
        <h3>Latest Blogs</h3>
      </div>

      <hr className="w-[72%] mt-5" />

      <div className="flex justify-center flex-wrap gap-6 mt-10 w-full max-w-7xl px-4">
        {/* Card */}
        <div className="bg-white w-full sm:w-[48%] md:w-[40%] lg:w-[32%]  shadow">
          <img className="w-full" src="./src/assets/img/blog2.webp" alt="" />

          <div className="p-5 space-y-4">
            <p className="text-xl">This is second post for xipblog</p>

            <p>
              <span>
                <i className="font-light text-gray-500 hover:text-green-700 ri-calendar-2-line">
                  Dec 26TH, 2022
                </i>
              </span>
              &nbsp; Themes Hastech
            </p>

            <p>
              There are many variation of Lorem ipsum text of the printing and
              typesetting industry. Lorem Ipsum has been the...
            </p>

            <button className="bg-gray-900 py-2 px-4 text-white rounded-full">
              Read More
            </button>
          </div>
        </div>

        <div className="bg-white w-full sm:w-[48%] md:w-[40%] lg:w-[32%]  shadow">
          <img className="w-full" src="./src/assets/img/blog1.webp" alt="" />
          <div className="p-5 space-y-4">
            <p className="text-xl">This is second post for xipblog</p>
            <p>
              <i className="font-light text-gray-500 hover:text-green-700 ri-calendar-2-line">
                Dec 26TH, 2022
              </i>
              &nbsp; Themes Hastech
            </p>
            <p>
              There are many variation of Lorem ipsum text of the printing and
              typesetting industry. Lorem Ipsum has been the...
            </p>
            <button className="bg-gray-900 py-2 px-4 text-white rounded-full">
              Read More
            </button>
          </div>
        </div>

        <div className="bg-white w-full sm:w-[48%] md:w-[40%] lg:w-[32%]  shadow">
          <img className="w-full" src="./src/assets/img/blog3.webp" alt="" />
          <div className="p-5 space-y-4">
            <p className="text-xl">This is second post for xipblog</p>
            <p>
              <i className="font-light text-gray-500 hover:text-green-700 ri-calendar-2-line">
                Dec 26TH, 2022
              </i>
              &nbsp; Themes Hastech
            </p>
            <p>
              There are many variation of Lorem ipsum text of the printing and
              typesetting industry. Lorem Ipsum has been the...
            </p>
            <button className="bg-gray-900 py-2 px-4 text-white rounded-full">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
