import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { nameBn, image, unit, today, change, slug } = product;

  return (
    <Link
      href={`/product/${slug}`}
      className="block rounded-xl bg-base-100 px-5 py-6 transition hover:border-green-300"
    >
      {/* Product Info */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10  items-center justify-center rounded-lg bg-[#F0F5F0] text-xl">
          {image || "📦"}
        </div>

        <div>
          <h2 className="text-sm font-bold text-[#1D271F]">{nameBn}</h2>

          <p className="text-[11px] text-gray-500">
            {unit === "kg" ? "প্রতি কেজি" : unit}
          </p>
        </div>
      </div>

      {/* Today's Price */}
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] text-gray-500">আজকের দাম</p>

          <p className="text-sm font-bold text-[#1D271F]">
            {today?.toLocaleString("bn-BD")} টাকা
          </p>
        </div>

        {/* Price Change */}
        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold ${
            change?.dir === "up"
              ? "bg-red-50 text-red-500"
              : change?.dir === "down"
                ? "bg-green-50 text-green-600"
                : "bg-gray-100 text-gray-500"
          }`}
        >
          {change?.dir === "up" ? "▲" : change?.dir === "down" ? "▼" : "—"}{" "}
          {change?.pct ?? 0}%
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
