import baseUrl from "@/services/baseUrl";
import Link from "next/link";

const getCategories = async () => {
  const res = await fetch(`${baseUrl}/categories`);
  const data = await res.json()
  return data
};
const CategoryLinks = async () => {
  const categories = await getCategories();
  return (
    <div className="border-y border-gray-200 bg-base-100 shadow-sm">
      <div className="container mx-auto flex items-center gap-2 overflow-x-auto px-4 py-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category?.slug}`}
            className="flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-gray-800 transition hover:bg-green-100"
          >
            <span className="text-lg">{category?.icon}</span>
            <span>{category?.nameBn}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryLinks;