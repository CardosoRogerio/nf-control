import * as React from "react";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border bg-white shadow-sm p-4 ${className || ""}`}>
      {children}
    </div>
  );
}