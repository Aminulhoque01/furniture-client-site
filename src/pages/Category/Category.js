import React, { useEffect, useState } from 'react';
import CategoryProduct from '../CategoryProduct/CategoryProduct';

const Category = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://furniture-server-site.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    return (

        <div className='mt-5'>
            <div className="card bg-neutral text-accent">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold ">Product Categories</h2>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-2 mt-5'>
                        {
                            products.map(product => <CategoryProduct key={product.id} product={product} >
                            
                            </CategoryProduct>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;