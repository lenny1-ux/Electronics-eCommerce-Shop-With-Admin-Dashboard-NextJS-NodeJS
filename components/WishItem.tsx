// ./WishItem.tsx
"use client";

import React from "react";
import { sanitize, sanitizeHtml } from "@/lib/sanitize";

interface WishItemProps {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  slug?: string;          // added optional slug
  onRemove?: (id: string) => void;
}

const WishItem: React.FC<WishItemProps> = ({
  
  id={item?.id};
  name={item?.title};
  price={item?.price};
  imageUrl={item?.image};
  slug={item?.slug};
}) => {
  return (
    <div className="flex items-center gap-x-4 border rounded-md p-4 shadow-sm bg-white max-w-md">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={sanitize(name)}
          className="w-20 h-20 object-cover rounded-md"
        />
      ) : (
        <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}

      <div className="flex-1 flex flex-col justify-between h-full">
        <h3 className="font-semibold text-gray-900 text-lg break-words">
          {sanitize(name)}
        </h3>
        <span className="text-gray-700 font-medium">${price.toFixed(2)}</span>
      </div>

      {onRemove && (
        <button
          onClick={() => onRemove(id)}
          className="text-red-500 hover:text-red-700 font-bold text-lg"
          title="Remove from wishlist"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default WishItem;
