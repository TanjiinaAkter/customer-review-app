import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewList from "../ReviewList/ReviewList";

const ReviewForm = () => {
  // Store input values
  const [rating, setRating] = useState(0);
  const [shopName, setShopName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [dateTime, setDateTime] = useState("");
  //All review data
  const [reviews, setReviews] = useState(() => {
    return JSON.parse(localStorage.getItem("reviews")) || [];
  });
  console.log(reviews);

  // Save reviews to localStorage whenever reviews state changes
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);
  const clearForm = () => {
    setRating(0);
    setShopName("");
    setReviewText("");
    setDateTime("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !shopName.trim() || !reviewText.trim() || !dateTime) {
      alert("Please fill all fields !!");
      return;
    }

    const newReview = {
      id: Date.now(),
      rating,
      shopName,
      reviewText,
      dateTime,
    };
    setReviews((prev) => [...prev, newReview]);
    clearForm();
  };

  return (
    <div className="mt-8">
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card   bg-base-100 mx-auto w-[90%]  md:w-[90%] lg:w-[50%] shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="bg-white rounded-md p-4">
                <h1 className="text-4xl md:text-[40px] text-center text-[#4a5368]  mb-5 font-bold">
                  Review Form
                </h1>
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
                        onClick={() => setRating(star)}
                        className={`cursor-pointer ${
                          rating >= star ? "text-yellow-400" : "text-gray-400"
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
                    onChange={(e) => setShopName(e.target.value)}
                    value={shopName}
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
                    onChange={(e) => setReviewText(e.target.value)}
                    value={reviewText}
                    name=""
                    id=""
                    rows={4}
                    cols={10}
                    className="input px-2 rounded-sm placeholder-[#697183] placeholder:text-sm placeholder:font-medium py-2 text-lg bg-transparent border focus:outline-none hover:outline-0 border-gray-300 text-[#4a5368] w-full"
                    placeholder="Please type your review"></textarea>
                </div>
                {/*date */}
                <div>
                  <label className=" md:w-[26%]  py-2 text-[#4a5368] text-[20px] md:text-[1.2rem] font-semibold">
                    Select Date & Time :
                  </label>
                  <input
                    onChange={(e) => setDateTime(e.target.value)}
                    value={dateTime}
                    type="datetime-local"
                    name=""
                    id=""
                  />
                </div>
                <button
                  type="submit"
                  className="p-3 font-semibold hover:scale-95 hover:bg-red-600 ease-in hover:transition-transform duration-300 text-lg w-full bg-[#4a5368] text-white mt-4">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ReviewList reviews={reviews} setReviews={setReviews}></ReviewList>
    </div>
  );
};

export default ReviewForm;
