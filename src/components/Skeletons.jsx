"use client";

export function CardSkeleton({ className = "" }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-(--bg-secondary)/60 rounded-2xl p-6 h-full">
        <div className="w-12 h-12 bg-(--text-main)/10 rounded-xl mb-4" />
        <div className="h-4 bg-(--text-main)/10 rounded w-3/4 mb-3" />
        <div className="h-3 bg-(--text-main)/10 rounded w-full mb-2" />
        <div className="h-3 bg-(--text-main)/10 rounded w-2/3" />
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-(--bg-secondary)/60 rounded-2xl aspect-[3/4]" />
    </div>
  );
}

export function ImageSkeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-(--bg-secondary)/60 ${className}`}>
      <div className="w-full h-full bg-(--text-main)/10" />
    </div>
  );
}

export function TextSkeleton({ lines = 3, className = "" }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-(--text-main)/10 rounded animate-pulse"
          style={{ width: i === lines - 1 ? "60%" : "100%" }}
        />
      ))}
    </div>
  );
}

export function SectionSkeleton() {
  return (
    <div className="w-full px-6 py-12 md:px-16 md:py-20 animate-pulse">
      <div className="h-8 bg-(--text-main)/10 rounded w-1/3 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
