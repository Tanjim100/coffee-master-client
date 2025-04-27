import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewCoffee = () => {
    const loadedCoffee = useLoaderData();

    const {
        coffeeName,
        chefName,
        supplierName,
        taste,
        category,
        details,
        photo,
    } = loadedCoffee;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{coffeeName}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;