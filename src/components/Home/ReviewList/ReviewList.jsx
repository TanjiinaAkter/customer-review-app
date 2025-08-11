import React, { useState } from "react";

import ReviewCard from "../ReviewCard/ReviewCard";
const ReviewList = ({ reviews, setReviews }) => {
  console.log(reviews);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter((rev) =>
        rev.shopName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredReviews(filtered);
    }
  };
  return (
    <div>
      <div className="mb-5 mt-16">
        <h1 className="text-4xl md:text-[40px] text-center text-[#6e7c9d] mb-2  font-bold">
          All Reviews
        </h1>
        <hr className="h-[3px] w-[5%] mb-5 bg-[#6e7c9d] mx-auto" />
        <p className="text-[#8e9bba] text-center text-[20px] mb-2 md:mb-0 md:text-[1.2rem] font-medium">
          Read genuine reviews from shoppers to guide your next online purchase.
        </p>
      </div>
      <div className="my-3 flex flex-col  md:flex-row justify-end items-center gap-3 w-full">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="search"
          name=""
          className="input hover:scale-110 rounded-sm placeholder-[#979fb3] hover:transition-transform hover:ease-in-out hover:duration-300 placeholder:text-sm placeholder:font-medium py-2 text-lg bg-transparent border focus:outline-none px-2 hover:outline-0 border-gray-300 text-[#4a5368]"
          placeholder="Type Shop Name to filter out..."
          id=""
        />
        <button
          onClick={handleSearch}
          className="px-5 rounded-md py-2 font-semibold hover:scale-95 hover:bg-red-600 ease-in hover:transition-transform duration-300 text-lg  bg-[#4a5368] text-white">
          Search
        </button>
      </div>
      <div className="p-[1.3rem] mt-12 md:mt-0 md:p-24 relative grid-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((rev) => (
            <ReviewCard
              key={rev.id}
              rev={rev}
              setReviews={setReviews}></ReviewCard>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500 font-semibold col-span-3">
            No reviews found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewList;
