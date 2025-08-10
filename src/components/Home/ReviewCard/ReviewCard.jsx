import React from "react";
import image from "../../../assets/review.png";
import { FaStar } from "react-icons/fa";
import revImg from "../../../assets/pexels-anete-lusina-6331236.jpg";
const ReviewCard = ({ rev }) => {
  const { id, rating, shopName, reviewText, dateTime } = rev;
  return (
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
          {shopName}
        </h1>
        <p className="text-lg font-semibold capitalize flex flex-row">
          ratings :
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`${
                star <= rating ? "text-yellow-400" : "text-gray-400"
              }`}></FaStar>
          ))}
        </p>
        <p>{reviewText}</p>
        <h2>{new Date(dateTime).toLocaleString()}</h2>
        {/* <h2>{new Date(dateTime).toLocaleString()}</h2> */}
      </div>
      <div className="z-40 pl-2 mb-4 flex justify-start gap-5 relative">
        <button
          onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
          className="px-7 py-[4px] text-gray-800 hover:bg-gray-600 bg-white text-lg font-semibold rounded-sm">
          Edit
        </button>
        <dialog id={`my_modal_${id}`} className="modal w-[50%] p-4">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">{id}</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn px-7 py-[4px] text-white hover:bg-gray-600 bg-red-600 text-lg font-semibold rounded-sm">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
        <button className="px-5 py-[4px] bg-red-600 hover:bg-gray-600 text-white text-lg font-semibold rounded-sm">
          Delete
        </button>
      </div>
      <div className="absolute rounded-lg shadow-2xl inset-0 z-10 bg-[#15273e] opacity-90"></div>
    </div>
  );
};

export default ReviewCard;
