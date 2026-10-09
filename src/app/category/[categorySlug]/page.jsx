import ProductCard from '@/components/ProductCard';
import baseUrl from '@/services/baseUrl';
import React from 'react';

const getCategoryProducts = async (categorySlug) => {
    const res = await fetch(`${baseUrl}/products?category=${categorySlug}`);
    const data = await res.json();
    return data;
};

const getCategories = async () => {
    const res = await fetch(`${baseUrl}/categories`);

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    return res.json();
};

const CategoryProducts = async ({ params }) => {
    const { categorySlug } = await params;
    const categoryProcucts = await getCategoryProducts(categorySlug);
    const categories = await getCategories();

    const currentCategory = categories.find(
        category => category.slug === categorySlug
    );

    return (
        <main className="min-h-screen py-6">
            <div className="container mx-auto px-4">

                {/* Category Header */}
                <div className="flex items-center gap-3 rounded-xl bg-white px-6 py-8 shadow-sm">
                    <span className="text-3xl">
                        {currentCategory?.icon}
                    </span>

                    <div>
                        <h1 className="text-xl font-bold text-[#1D271F]">
                            {currentCategory?.nameBn}
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            {categoryProcucts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>

                {/* Product Count */}
                <p className="my-5 text-sm text-gray-500">
                    মোট {categoryProcucts.length}টি পণ্য দেখানো হচ্ছে
                </p>

                {/* Existing Product Cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryProcucts.map(product => (
                        <ProductCard
                            key={product.slug}
                            product={product}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {categoryProcucts.length === 0 && (
                    <div className="rounded-xl bg-white py-12 text-center">
                        <p className="text-gray-500">
                            এই ক্যাটেগরিতে কোনো পণ্য পাওয়া যায়নি।
                        </p>
                    </div>
                )}

            </div>
        </main>
    );
};

export default CategoryProducts;