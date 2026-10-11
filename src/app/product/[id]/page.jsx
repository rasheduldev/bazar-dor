import Breadcrumb from '@/components/Breadcrumb';
import PriceSummary from '@/components/PriceSummary';
import ProductSummary from '@/components/ProductSummary';
import baseUrl from '@/services/baseUrl';
import { notFound } from 'next/navigation'; 
import React from 'react';

const getSingleProducts = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/products/${id}`);
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    if (data.error || !data.id || !data.nameBn) {
      return null;
    }
    return data;
  } catch (error) {
    return null;
  }
};

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