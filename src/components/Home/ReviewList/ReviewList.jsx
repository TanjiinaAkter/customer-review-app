import React from "react";
// import image from "../../../assets/review.png";
// import revImg from "../../../assets/pexels-anete-lusina-6331236.jpg";
import ReviewCard from "../ReviewCard/ReviewCard";
const ReviewList = ({ reviews }) => {
  console.log(reviews);
  
  return (
    <div>
      <div className="mb-5 mt-16">
        <h1 className="text-4xl md:text-[40px] text-center text-[#4a5368]  mb-5 font-bold">
          All Reviews
        </h1>

        <p className="text-[#4f586d] text-center text-[20px] mb-2 md:mb-0 md:text-[1.2rem] font-medium">
          Read genuine reviews from shoppers to guide your next online purchase.
        </p>
      </div>
      <div className="p-[1.3rem] md:p-24 relative grid-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} rev={rev}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
