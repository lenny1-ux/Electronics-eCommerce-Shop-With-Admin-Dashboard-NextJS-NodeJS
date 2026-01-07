// ./SingleReview.tsx
"use client";

import React from "react";
import RatingPercentElement from "./RatingPercentElement";
import { sanitize, sanitizeHtml } from "@/lib/sanitize";

interface Review {
  id: string;
  reviewerName: string;
  reviewText: string;
  ratingPercent: number; // 0-100
  date?: string; // optional review date
}

interface SingleReviewProps {
  review: Review;
}

const SingleReview: React.FC<SingleReviewProps> = ({ review }) => {
  return (
    <div className="flex flex-col gap-y-3 border rounded-md p-4 shadow-sm bg-white max-w-xl">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg text-gray-900">
          {sanitize(review.reviewerName)}
        </h4>
        <div className="flex items-center gap-x-2">
          <RatingPercentElement percent={review.ratingPercent} size={50} />
        </div>
      </div>

      <p className="text-gray-700 text-sm max-w-full break-words">
        {sanitizeHtml(review.reviewText)}
      </p>

      {review.date && (
        <span className="text-gray-400 text-xs">
          {new Date(review.date).toLocaleDateString()}
        </span>
      )}
    </div>
  );
};

export default SingleReview;
