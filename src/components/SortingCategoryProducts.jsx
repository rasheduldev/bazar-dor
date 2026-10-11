"use client";
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";

const SortingCategoryProducts = ({ products }) => {
const [sortBy, setSortBy] = useState("default");
let sortedProducts = [...products];
if (sortBy === "lowToHigh") {
sortedProducts.sort((a, b) => a.today - b.today);
} else if (sortBy === "highToLow") {
sortedProducts.sort((a, b) => b.today - a.today);
}

return ( 
<div>
  <div className="my-5 flex items-center justify-end rounded-xl border border-[#E2EAE3] bg-[#F8FBF8] px-5 py-3"> 
    <div className="flex items-center gap-2"> 
      <label htmlFor="sort" className="text-xs text-gray-500">
        সাজান
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="h-8 rounded-lg border border-[#D9E0DA] bg-transparent px-2 text-xs text-[#1D271F] outline-none focus:border-[#05893E]"
      >
        <option value="default">ডিফল্ট</option>
        <option value="lowToHigh">দাম: কম থেকে বেশি</option>
        <option value="highToLow">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  </div>

  <p className="mb-4 text-sm text-gray-500">
    মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
  </p>

  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {sortedProducts.map((product) => (
      <ProductCard key={product?.slug} product={product} />
    ))}
  </div>
</div>
);
};

export default SortingCategoryProducts;