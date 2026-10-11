import Breadcrumb from '@/components/Breadcrumb';
import PriceSummary from '@/components/PriceSummary';
import ProductSummary from '@/components/ProductSummary';
import baseUrl from '@/services/baseUrl';
import { notFound } from 'next/navigation'; 
import React from 'react';

const getSingleProducts = async(id)=>{
    const res = await fetch(`${baseUrl}/products/${id}`);
    const data = await res.json();
    return data;
}

const ProductDetailsPage = async({params}) => {
    const {id} = await params
    const product = await getSingleProducts(id)
    if (!product) {
        notFound();
    }

    return (
        <div className='container mx-auto px-4 py-6'>
        <Breadcrumb
        categoryName={product?.categoryNameBn}
        categorySlug={product?.category}
        productName={product?.nameBn}
      />
            <ProductSummary product={product}></ProductSummary>
            <PriceSummary markets={product?.markets} />
        </div>
    );
};

export default ProductDetailsPage;