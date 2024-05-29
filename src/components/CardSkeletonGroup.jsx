import CardSkeleton from "./CardSkeleton";

function CardSkeletonGroup({ amount = 4 }) {
  console.log("amount: " + amount);
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3">
      {
        Array.from({ length: amount }, (_, index) => (
          <CardSkeleton key={index} />
        ))
      }
    </div>
  );
}

export default CardSkeletonGroup;
