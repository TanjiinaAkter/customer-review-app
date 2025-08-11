import image from "../../../assets/review.png";
import { FaStar } from "react-icons/fa";
import revImg from "../../../assets/revBg.jpg";
import { useState } from "react";
import { IoStorefrontSharp } from "react-icons/io5";
const ReviewCard = ({ rev, setReviews }) => {
  const { id, rating, shopName, reviewText, dateTime } = rev;
  const [editRating, setEditRating] = useState(rating);
  const [editReviewText, setEditReviewText] = useState(reviewText);
  // EDIT REVIEW
  const handleSubmit = (e) => {
    e.preventDefault();

    const storedReviews = JSON.parse(localStorage.getItem("reviews"));
    const updatedReviews = storedReviews.map((review) =>
      review.id === id
        ? {
            ...review,
            rating: editRating,
            reviewText: editReviewText,
          }
        : review
    );

    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setReviews(updatedReviews);
    document.getElementById(`my_modal_${id}`).close();
  };
  // DELETE REVIEW
  const handleDelete = () => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const updatedReviews = storedReviews.filter((review) => review.id !== id);

    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setReviews(updatedReviews);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${revImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="card  hover:scale-105 hover:transition-transform duration-700 hover:ease-in-out rounded-lg text-white relative z-40 shadow-lg ">
      <div className=" absolute top-[-9%] left-[38%] md:left-[42%] z-40">
        <img className="  h-[4rem] w-[4rem]" src={image} alt="" />
      </div>

      <div className="p-4 space-y-7 relative z-40">
        <div className="flex justify-between items-center pt-8">
          <h1 className="text-lg lg:text-[28px] flex justify-start items-center gap-2 font-semibold capitalize text-white">
            <IoStorefrontSharp className="text-lg md:text-[20px]" />
            {shopName}
          </h1>
          <p className="text-lg font-semibold capitalize flex flex-row">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={20}
                className={` ${
                  star <= rating ? "text-[#FFD700] " : "text-[#CCCCCC]"
                }`}></FaStar>
            ))}
          </p>
        </div>
        <p className="text-white text-[17px] ">{reviewText}</p>
        <h2 className="text-gray-300">{new Date(dateTime).toLocaleString()}</h2>
        {/* <h2>{new Date(dateTime).toLocaleString()}</h2> */}
      </div>
      <div className="z-40 pl-2 mb-4 flex justify-start gap-5 relative">
        <button
          onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
          className="px-7 py-[4px] text-gray-800 hover:bg-gray-600 bg-blue-400 text-lg font-semibold rounded-sm">
          Edit
        </button>
        <dialog id={`my_modal_${id}`} className="modal w-[30%] p-4">
          <div className="modal-box ">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="bg-white rounded-md p-4">
                <h1 className="text-4xl md:text-[30px] text-center text-slate-600  mb-5 font-bold">
                  Edit your review
                </h1>
                <hr className="h-[2px] w-[30%] bg-slate-300 mx-auto" />
                {/*Star rating */}
                <div className="flex flex-col md:flex-row justify-between shadow-md p-2">
                  <label className="text-[#4a5368] text-[20px] mb-2 md:mb-0 md:text-[1.2rem] font-semibold">
                    Rate this online shop :
                  </label>
                  <p className="flex justify-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={25}
                        onClick={() => setEditRating(star)}
                        className={`cursor-pointer ${
                          editRating >= star
                            ? "text-[#FFD700]"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </p>
                </div>
                {/*Shop Name */}
                <div className="flex flex-col my-3 md:flex-col">
                  <label className=" md:w-[26%]  py-2 text-[#4a5368] text-[20px] md:text-[1.2rem] font-semibold">
                    Shop Name :{" "}
                  </label>
                  <input
                    // onChange={(e) => shopName(e.target.value)}
                    // value={shopName}
                    defaultValue={shopName}
                    type="text"
                    className="input rounded-sm placeholder-[#697183] placeholder:text-sm placeholder:font-medium py-2 text-lg bg-transparent border focus:outline-none px-2 hover:outline-0 border-gray-300 text-[#4a5368] w-full"
                    placeholder="Please type Shop name"
                  />
                </div>
                {/*Shop textarea */}
                <div className="flex flex-col my-3 md:flex-col">
                  <label className=" md:w-[26%]  py-2 text-[#4a5368] text-[20px] md:text-[1.2rem] font-semibold">
                    Shop Review :
                  </label>
                  <textarea
                    onChange={(e) => setEditReviewText(e.target.value)}
                    // value={reviewText}
                    defaultValue={reviewText}
                    name=""
                    id=""
                    rows={4}
                    cols={10}
                    className="input px-2 rounded-sm placeholder-[#697183] placeholder:text-sm placeholder:font-medium py-2 text-lg bg-transparent border focus:outline-none hover:outline-0 border-gray-300 text-[#4a5368] w-full"
                    placeholder="Please type your review"></textarea>
                </div>

                <button
                  type="submit"
                  className="p-3 font-semibold hover:scale-95 hover:bg-red-600 ease-in hover:transition-transform duration-300 text-lg w-full bg-[#4a5368] text-white mt-4">
                  Submit Review
                </button>
              </form>
            </div>
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
        <button
          onClick={handleDelete}
          className="px-5 py-[4px] bg-red-600 hover:bg-[#a33125] text-white text-lg font-semibold rounded-sm">
          Delete
        </button>
      </div>
      <div className="absolute rounded-lg shadow-2xl inset-0 z-10 bg-[#030224de]  opacity-90"></div>
    </div>
  );
};

export default ReviewCard;
