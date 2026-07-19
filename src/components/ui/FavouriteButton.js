"use client";

import { toggleFavorite } from "@/lib/actions";
import { startTransition, useOptimistic } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

function FavouriteButton({ event, isFavorite }) {
  const [optimisticIsFavourite, optimisticSetIsFavourite] = useOptimistic(
    isFavorite,
    (state) => !state,
  );
  async function handleClick() {
    startTransition(() => {
      optimisticSetIsFavourite();
    });
    await toggleFavorite(event.id);
  }
  return (
    <button
      onClick={handleClick}
      aria-label={
        optimisticIsFavourite ? "Remove from favorites" : "Add to favorites"
      }
      className={`rounded-full p-2 transition-colors duration-200 ${
        optimisticIsFavourite
          ? "bg-red-100 text-red-500 hover:bg-red-200"
          : "bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-500"
      }`}
    >
      {optimisticIsFavourite ? (
        <HiHeart className="h-5 w-5" />
      ) : (
        <HiOutlineHeart className="h-5 w-5" />
      )}
    </button>
  );
}

export default FavouriteButton;
