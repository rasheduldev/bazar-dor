import React from "react";

const ProductSummary = ({ product }) => {
  const { nameBn, image, categoryNameBn, unit, today, yesterday, change } =
    product;

  const unitName =
    unit === "kg"
      ? "প্রতি কেজি"
      : unit === "liter"
        ? "প্রতি লিটার"
        : unit === "dozen"
          ? "প্রতি ডজন"
          : unit === "piece"
            ? "প্রতি পিস"
            : unit;

  return (
    <div className="rounded-2xl border border-[#E1E9E1] mt-5 bg-white p-5 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20  items-center justify-center rounded-xl bg-[#F0F5F0] text-4xl">
            {image}
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#1D271F] sm:text-2xl">
              {nameBn}
            </h1>
            <p className="mt-1 text-sm text-gray-500">
               {unitName} - {categoryNameBn}  
            </p>
             <p className="mt-2 text-sm text-gray-600">
        গতকালের তুলনায়{" "}
        <span className="font-semibold text-[#1D271F]">
          {Math.abs(today - yesterday).toLocaleString("bn-BD")} টাকা
        </span>{" "} 
        {today > yesterday
          ? "দাম বেড়েছে।"
          : today < yesterday
            ? "দাম কমেছে।"
            : "দামের কোনো পরিবর্তন হয়নি।"}
      </p>
          </div>
        </div>
        <div className="sm:ml-auto sm:min-w-32">
          <div className="rounded-xl bg-[#F0F5F0] px-5 py-4 text-center">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="mt-1 text-3xl font-bold text-[#1D271F]">
              {today?.toLocaleString("bn-BD")}
            </p>
            <p className="text-xs text-gray-500">
              টাকা / {unit === "kg" ? "কেজি" : unitName}
            </p>
            <span className={`mt-2 inline-block text-xs font-semibold ${
            change?.dir === "up" ? "text-red-600" : change?.dir === "down"? "text-green-600" : "text-gray-500"
              }`}
            >
              {change?.dir === "up" ? "▲" : change?.dir === "down" ? "▼" : "—"}{" "}
              {Number(change?.pct ?? 0).toLocaleString("bn-BD", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}
              %
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductSummary;
