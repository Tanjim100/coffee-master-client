import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, onDelete }) => {
    const { _id, coffeeName, chefName, supplierName, taste, category, details, photo, } = coffee;

    const handleDelete = _id => {
        console.log(_id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(_id);
            }
        });
    }


    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{coffeeName}</h2>
                <p>{chefName}</p>
                <p>{supplierName}</p>
                <p>{category}</p>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <div className="join gap-2">
                        <Link to={`/viewCoffee/${_id}`} className="btn join-item">View</Link>
                        <Link to={`/updateCoffee/${_id}`} className="btn join-item">Edit</Link>
                        <button onClick={() => { handleDelete(_id) }} className="btn join-item bg-red-600 text-white">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;