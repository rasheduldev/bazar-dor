"use client";

import baseUrl from "@/services/baseUrl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryLinks = () => {
  const [categories, setCategories] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/categories`);
        const data = await res.json();
        setCategories(data);
      } catch (error) {}
    };
    fetchCategories();
  }, []);

  return (
    <div className="border-t border-gray-200 bg-base-100 shadow-sm">
      <div className="container mx-auto flex items-center gap-2 overflow-x-auto px-4 py-2">
        {categories.map((category) => {
          const categoryPath = `/category/${category?.slug}`;
          const isActive = pathname === categoryPath;

          return (
            <Link
              key={category?.id}
              href={categoryPath}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition ${
                isActive
                  ? "bg-[#05893E] text-white shadow-sm"
                  : "text-gray-800 hover:bg-green-100"
              }`}
            >
              <span className="text-lg">{category?.icon}</span>
              <span>{category?.nameBn}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryLinks;
