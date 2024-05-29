function CardSkeleton() {
  return (
    <div class="w-full">
      <div class="rounded overflow-hidden shadow-md animate-pulse">
        <div class="h-48 bg-gray-300"></div>
        <div class="px-6 py-4">
          <div class="h-6 bg-gray-300 mb-2"></div>
          <div class="h-4 bg-gray-300 w-2/3"></div>
        </div>
        <div class="px-6 pt-4 pb-8">
          <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
          <div class="h-4 bg-gray-300 w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
