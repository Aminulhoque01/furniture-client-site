import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OpenModal from '../OpenModal/OpenModal';
import SingleProducts from '../single/SingleProducts';

const SingleCategory = () => {
    const Categories = useLoaderData([]);
    const [products, setProducts] = useState();

    return (

        <div className='bg-neutral'>

            <div className=' bg-neutral p-10'>

            </div>

            <div className='gap-4'>
                {
                    Categories.map(category => <SingleProducts
                        key={category._id}
                        category={category}
                        setProducts={setProducts}
                    >

                    </SingleProducts>)
                }


            </div>
            {
                products &&
                <OpenModal
                    products={products}
                    setProducts={setProducts}>
                </OpenModal>
            }
        </div>
    )
};

export default SingleCategory;