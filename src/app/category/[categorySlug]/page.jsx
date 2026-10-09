import SortingCategoryProducts from '@/components/SortingCategoryProducts';
import baseUrl from '@/services/baseUrl';

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
const currentCategory = categories.find(category => category.slug === categorySlug);
return (
    <main className=" py-6">
        <div className="container mx-auto px-4">
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
            <SortingCategoryProducts products={categoryProcucts} />
        </div>
    </main>
);


};

export default CategoryProducts;
