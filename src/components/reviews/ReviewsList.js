import Review from "./Review";

function ReviewsList({ reviews }) {
  return (
    <ul className="mt-16 flex flex-col gap-6">
      {reviews?.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </ul>
  );
}

export default ReviewsList;
