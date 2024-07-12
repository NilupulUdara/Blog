import Skeleton from "react-loading-skeleton";

export const SkeletonCard = () => {
  return (
    <div className="rounded-md p-2 shadow-md my-5 mx-4">
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Skeleton width={1280} height={20} />
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 break-all">
        <Skeleton count={3} />
      </p>
      <p className="flex justify-between">
        <Skeleton width={70} height={20} />
      </p>
    </div>
  );
};
