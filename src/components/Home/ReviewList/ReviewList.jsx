import React from "react";
import image from "../../../assets/review.png";
import revImg from "../../../assets/pexels-anete-lusina-6331236.jpg";
const ReviewList = () => {
  return (
    <div>
      <div className="mb-5 mt-0">
        <h1 className="text-4xl md:text-[40px] text-center text-[#4a5368]  mb-5 font-bold">
          All Reviews
        </h1>

        <p className="text-[#4f586d] text-center text-[20px] mb-2 md:mb-0 md:text-[1.2rem] font-medium">
          Read genuine reviews from shoppers to guide your next online purchase.
        </p>
      </div>
      <div className="p-[1.3rem] md:p-24 relative grid-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       <div
          style={{
            backgroundImage: `url(${revImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="card rounded-lg text-white relative z-40 shadow-lg ">
          <div className=" absolute top-[-9%] left-[40%] z-40">
            <img className="  h-[4rem] w-[4rem]" src={image} alt="" />
          </div>

          <div className="p-4 space-y-2 relative z-40">
            <h1 className="text-3xl pt-6 font-semibold capitalize text-yellow-300">
              shop name
            </h1>
            <h2 className="text-lg font-semibold capitalize ">ratings</h2>
            <p>
              review Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi, ipsam.
            </p>
            <h2>12 july 2025</h2>
          </div>
          <div className="z-40 pl-2 mb-4 flex justify-start gap-5 relative">
            <button className="px-7 py-[4px] text-gray-800 hover:bg-gray-600 bg-white text-lg font-semibold rounded-sm">
              Edit
            </button>
            <button className="px-5 py-[4px] bg-red-600 hover:bg-gray-600 text-white text-lg font-semibold rounded-sm">
              Delete
            </button>
          </div>
          <div className="absolute rounded-lg shadow-2xl inset-0 z-10 bg-[#15273e] opacity-90"></div>
        </div>
        <div
          style={{
            backgroundImage: `url(${revImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="card rounded-lg text-white relative z-40 shadow-lg ">
          <div className=" absolute top-[-9%] left-[40%] z-40">
            <img className="  h-[4rem] w-[4rem]" src={image} alt="" />
          </div>

          <div className="p-4 space-y-2 relative z-40">
            <h1 className="text-3xl pt-6 font-semibold capitalize text-yellow-300">
              shop name
            </h1>
            <h2 className="text-lg font-semibold capitalize ">ratings</h2>
            <p>
              review Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi, ipsam.
            </p>
            <h2>12 july 2025</h2>
          </div>
          <div className="z-40 pl-2 mb-4 flex justify-start gap-5 relative">
            <button className="px-7 py-[4px] text-gray-800 hover:bg-gray-600 bg-white text-lg font-semibold rounded-sm">
              Edit
            </button>
            <button className="px-5 py-[4px] bg-red-600 hover:bg-gray-600 text-white text-lg font-semibold rounded-sm">
              Delete
            </button>
          </div>
          <div className="absolute rounded-lg shadow-2xl inset-0 z-10 bg-[#15273e] opacity-90"></div>
        </div>
        <div
          style={{
            backgroundImage: `url(${revImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="card rounded-lg text-white relative z-40 shadow-lg ">
          <div className=" absolute top-[-9%] left-[40%] z-40">
            <img className="  h-[4rem] w-[4rem]" src={image} alt="" />
          </div>

          <div className="p-4 space-y-2 relative z-40">
            <h1 className="text-3xl pt-6 font-semibold capitalize text-yellow-300">
              shop name
            </h1>
            <h2 className="text-lg font-semibold capitalize ">ratings</h2>
            <p>
              review Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi, ipsam.
            </p>
            <h2>12 july 2025</h2>
          </div>
          <div className="z-40 pl-2 mb-4 flex justify-start gap-5 relative">
            <button className="px-7 py-[4px] text-gray-800 hover:bg-gray-600 bg-white text-lg font-semibold rounded-sm">
              Edit
            </button>
            <button className="px-5 py-[4px] bg-red-600 hover:bg-gray-600 text-white text-lg font-semibold rounded-sm">
              Delete
            </button>
          </div>
          <div className="absolute rounded-lg shadow-2xl inset-0 z-10 bg-[#15273e] opacity-90"></div>
        </div>
        <div
          style={{
            backgroundImage: `url(${revImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="card rounded-lg text-white relative z-40 shadow-lg ">
          <div className=" absolute top-[-9%] left-[40%] z-40">
            <img className="  h-[4rem] w-[4rem]" src={image} alt="" />
          </div>

          <div className="p-4 space-y-2 relative z-40">
            <h1 className="text-3xl pt-6 font-semibold capitalize text-yellow-300">
              shop name
            </h1>
            <h2 className="text-lg font-semibold capitalize ">ratings</h2>
            <p>
              review Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi, ipsam.
            </p>
            <h2>12 july 2025</h2>
          </div>
          <div className="z-40 pl-2 mb-4 flex justify-start gap-5 relative">
            <button className="px-7 py-[4px] text-gray-800 hover:bg-gray-600 bg-white text-lg font-semibold rounded-sm">
              Edit
            </button>
            <button className="px-5 py-[4px] bg-red-600 hover:bg-gray-600 text-white text-lg font-semibold rounded-sm">
              Delete
            </button>
          </div>
          <div className="absolute rounded-lg shadow-2xl inset-0 z-10 bg-[#15273e] opacity-90"></div>
        </div>
        <div
          style={{
            backgroundImage: `url(${revImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="card rounded-lg text-white relative z-40 shadow-lg ">
          <div className=" absolute top-[-9%] left-[40%] z-40">
            <img className="  h-[4rem] w-[4rem]" src={image} alt="" />
          </div>

          <div className="p-4 space-y-2 relative z-40">
            <h1 className="text-3xl pt-6 font-semibold capitalize text-yellow-300">
              shop name
            </h1>
            <h2 className="text-lg font-semibold capitalize ">ratings</h2>
            <p>
              review Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi, ipsam.
            </p>
            <h2>12 july 2025</h2>
          </div>
          <div className="z-40 pl-2 mb-4 flex justify-start gap-5 relative">
            <button className="px-7 py-[4px] text-gray-800 hover:bg-gray-600 bg-white text-lg font-semibold rounded-sm">
              Edit
            </button>
            <button className="px-5 py-[4px] bg-red-600 hover:bg-gray-600 text-white text-lg font-semibold rounded-sm">
              Delete
            </button>
          </div>
          <div className="absolute rounded-lg shadow-2xl inset-0 z-10 bg-[#15273e] opacity-90"></div>
        </div>
        <div
          style={{
            backgroundImage: `url(${revImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="card rounded-lg text-white relative z-40 shadow-lg ">
          <div className=" absolute top-[-9%] left-[40%] z-40">
            <img className="  h-[4rem] w-[4rem]" src={image} alt="" />
          </div>

          <div className="p-4 space-y-2 relative z-40">
            <h1 className="text-3xl pt-6 font-semibold capitalize text-yellow-300">
              shop name
            </h1>
            <h2 className="text-lg font-semibold capitalize ">ratings</h2>
            <p>
              review Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi, ipsam.
            </p>
            <h2>12 july 2025</h2>
          </div>
          <div className="z-40 pl-2 mb-4 flex justify-start gap-5 relative">
            <button className="px-7 py-[4px] text-gray-800 hover:bg-gray-600 bg-white text-lg font-semibold rounded-sm">
              Edit
            </button>
            <button className="px-5 py-[4px] bg-red-600 hover:bg-gray-600 text-white text-lg font-semibold rounded-sm">
              Delete
            </button>
          </div>
          <div className="absolute rounded-lg shadow-2xl inset-0 z-10 bg-[#15273e] opacity-90"></div>
        </div>
        <div
          style={{
            backgroundImage: `url(${revImg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="card rounded-lg text-white relative z-40 shadow-lg ">
          <div className=" absolute top-[-9%] left-[40%] z-40">
            <img className="  h-[4rem] w-[4rem]" src={image} alt="" />
          </div>

          <div className="p-4 space-y-2 relative z-40">
            <h1 className="text-3xl pt-6 font-semibold capitalize text-yellow-300">
              shop name
            </h1>
            <h2 className="text-lg font-semibold capitalize ">ratings</h2>
            <p>
              review Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi, ipsam.
            </p>
            <h2>12 july 2025</h2>
          </div>
          <div className="z-40 pl-2 mb-4 flex justify-start gap-5 relative">
            <button className="px-7 py-[4px] text-gray-800 hover:bg-gray-600 bg-white text-lg font-semibold rounded-sm">
              Edit
            </button>
            <button className="px-5 py-[4px] bg-red-600 hover:bg-gray-600 text-white text-lg font-semibold rounded-sm">
              Delete
            </button>
          </div>
          <div className="absolute rounded-lg shadow-2xl inset-0 z-10 bg-[#15273e] opacity-90"></div>
        </div>
      
      </div>
    </div>
  );
};

export default ReviewList;
