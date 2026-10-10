import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import baseUrl from "@/services/baseUrl";
import Image from "next/image";
const getProducts = async (categorySlug) => {
const res = await fetch(`${baseUrl}/products`);
const data = await res.json();
return data;
};
export default async function Home() {
  const products = await getProducts()
  const priceRiseProducts = products .filter((product) => product?.change?.dir === "up")
  .sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);
  const priceDropProducts = products .filter((product) => product?.change?.dir === "down")
  .sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);

  return (
    <div className="container mx-auto px-2">
      <Banner></Banner>
      <p className="my-4 font-bold text-xl text-[#1D271F]">
  <span className="text-red-500">▲</span> আজ দাম বেড়েছে
   </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {
          priceRiseProducts.map(product=><ProductCard key={product.slug} product={product}></ProductCard>)
        }
      </div>
      <p className="my-4 font-bold text-xl text-[#1D271F]">
  <span className="text-green-500">▼</span> আজ দাম কমেছে
   </p>
   <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {
        priceDropProducts.map(product=><ProductCard key={product.slug} product={product}></ProductCard>)
    }
   </div>
   <p className="mt-4 font-bold text-xl text-[#1D271F]">
   সব পণ্য
   </p>
   <p className="my-2 text-sm text-gray-500">
   মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
   </p>
   <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {
          products.map(product=><ProductCard key={product.slug} product={product}></ProductCard>)

    }
   </div>
    </div>
  );
}
