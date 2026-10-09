import ProductSummary from '@/components/ProductSummary';
import baseUrl from '@/services/baseUrl';
import React from 'react';
const getSingleProducts = async(id)=>{
const res = await fetch(`${baseUrl}/products/${id}`);
const data = await res.json();
return data;
}
const ProductDetailsPage = async({params}) => {
    const {id} = await params
    const product = await getSingleProducts(id)
    return (
        <div className='container mx-auto'>
            <ProductSummary product={product}></ProductSummary>
        </div>
    );
};

export default ProductDetailsPage;