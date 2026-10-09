"use client";
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const SortingCategoryProducts = ({ products }) => {
const [sortBy, setSortBy] = useState("default");
let sortedProducts = [...products];
if (sortBy === "lowToHigh") {
sortedProducts.sort((a, b) => a.today - b.today);
} else if (sortBy === "highToLow") {
sortedProducts.sort((a, b) => b.today - a.today);
}

return ( <div>
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
  {sortedProducts.length > 0 ? (
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {sortedProducts.map((product) => (
      <ProductCard key={product.slug} product={product} />
    ))}
  </div>
) : (
  <div className="mt-6 rounded-xl border border-[#E2EAE3] bg-white px-4 py-12 text-center">
    <h2 className="mt-4 text-xl font-bold text-[#1D271F]">
      পণ্য পাওয়া যায়নি!
    </h2>
    <p className="mt-2 text-sm text-gray-500">
      এই ক্যাটেগরিতে কোনো পণ্য নেই অথবা ক্যাটেগরিটি খুঁজে পাওয়া যায়নি।
    </p>
    <Link href="/"
    className="mt-5 inline-block rounded-lg bg-[#05893E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
    >
      হোম পেজে ফিরে যান
    </Link>
  </div>
  )}
</div>

);
};

export default SortingCategoryProducts;
