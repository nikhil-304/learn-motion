"use client";
import React from "react";
import { cn } from "@/lib/utils";

const Card = () => {
  return (
    <div
      className={cn(
        "w-72 min-h-104 h-104 rounded-xl",
        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
        "p-6 flex flex-col",
      )}
    >
      <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
      <p className="text-neutral-600 mt-2 text-[10px]">
        A collection of beautiful and reusable UI components.
      </p>
      <div className="flex items-center justify-center">
        <button className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
          {/* <Image
            src="/path/to/image"
            alt="Icon"
            className="h-4 w-4"
            width={16}
            height={16}
          /> */}
          Aceternity
          {/* Cross Icon idhar daalna hai */}
        </button>
      </div>
      <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
        <div className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200">
          <div className="flex gap-2 p-4">
            <div
              className="h-7 w-7 shrink-0 rounded-md bg-white flex items-center justify-center
                shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
            >
              {/* <IconMessage className="h-4 w-4 text-neutral-600" /> */}
            </div>

            <div className="flex flex-col">
              <p className="text-[8px] font-bold">Aceternity UI Components</p>

              <p className="mt-1 text-[8px] text-neutral-400">
                A collection of UI components
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
