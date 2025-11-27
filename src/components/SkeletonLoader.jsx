import React from 'react';

const Skeleton = ({ className }) => {
  return (
    <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
  );
};

export const PageSkeleton = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section Skeleton */}
      <div className="max-w-7xl mx-auto mb-12">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-8" />
        <Skeleton className="h-64 w-full rounded-xl" />
      </div>

      {/* Content Section Skeleton */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
             <Skeleton className="h-40 w-full rounded-lg" />
             <Skeleton className="h-40 w-full rounded-lg" />
          </div>
        </div>
        
        <div className="space-y-6">
          <Skeleton className="h-64 w-full rounded-lg" />
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
