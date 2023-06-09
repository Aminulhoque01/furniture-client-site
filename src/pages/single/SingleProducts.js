import React from 'react';

const SingleProducts = ({category,setProducts}) => {
    const { name, sell_price,buy_price, image_url,used,location,phone,Time,PurchaseYear } = category;
    return (
        <div className='p-10 bg-neutral'>

            <div className="card bg-base-100 shadow-xl">
                <figure className='p-5 rounded'><img src={image_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p className="card-title text-1xl font-bold ">Buy price: {buy_price}$</p>
                    <p className="card-title text-1xl font-bold ">Sell price: {sell_price}$</p>
                    <p className="card-title text-1xl">i am using {used}</p>
                    <p className="card-title text-1xl">my phone number: {phone}</p>
                    <p className="card-title text-1xl">Post-time:{Time}</p>
                    <p className="card-title text-1xl">PurchaseYear:{PurchaseYear}</p>
                    <p className="card-title ">Location: {location}</p>
                    <div className="card-actions">

                        <label htmlFor="open-modal"
                            className="btn btn-primary"
                            onClick={() => setProducts(category)}>Book Now</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProducts;