import { getIsFavorite } from "@/lib/Data-services";
import FavouriteButton from "./FavouriteButton";

async function FavouriteButtonServer({ event }) {
  const isFavorite = await getIsFavorite(event?.id);

  return <FavouriteButton isFavorite={isFavorite} event={event} />;
}

export default FavouriteButtonServer;
