import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const loadedCoffee = useLoaderData();

    const handleUpdateCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const coffeeName = form.coffeeName.value;
        const chefName = form.chefName.value;
        const supplierName = form.supplierName.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {
            coffeeName,
            chefName,
            supplierName,
            taste,
            category,
            details,
            photo,
        }

        console.log(updatedCoffee);

        fetch(`http://localhost:6010/coffee/${loadedCoffee._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount)
                {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }
    return (
        <div className='bg-[#F4F3F0] p-28'>
            <h2 className='text-3xl font-extrabold mb-8 text-center'>Update the info of coffee : {loadedCoffee?.coffeeName}</h2>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
                    {/* coffee name  */}
                    <div className=''>
                        <label className="form-control w-full flex flex-col">
                            <div className="label">
                                <span className="label-text text-black">Coffee Name</span>
                            </div>
                            <input type="text" name='coffeeName' placeholder="Enter Coffee Name" defaultValue={loadedCoffee?.coffeeName} className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* chef name  */}
                    <div className=''>
                        <label className="form-control w-full  flex flex-col">
                            <div className="label">
                                <span className="label-text text-black">Chef</span>
                            </div>
                            <input type="text" name='chefName' placeholder="Enter Chef Name" defaultValue={loadedCoffee?.chefName} className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* supplier name  */}
                    <div className=''>
                        <label className="form-control w-full  flex flex-col">
                            <div className="label">
                                <span className="label-text text-black">Supplier</span>
                            </div>
                            <input type="text" name='supplierName' placeholder="Enter Supplier Name" defaultValue={loadedCoffee?.supplierName} className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* taste  */}
                    <div className=''>
                        <label className="form-control w-full  flex flex-col">
                            <div className="label">
                                <span className="label-text text-black">Taste</span>
                            </div>
                            <input type="text" name='taste' placeholder="Enter Coffee Taste" defaultValue={loadedCoffee?.taste} className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* category */}
                    <div className=''>
                        <label className="form-control w-full  flex flex-col">
                            <div className="label">
                                <span className="label-text text-black">Category</span>
                            </div>
                            <input type="text" name='category' placeholder="Enter Coffee Category" defaultValue={loadedCoffee?.category} className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* details  */}
                    <div className=''>
                        <label className="form-control w-full  flex flex-col">
                            <div className="label">
                                <span className="label-text text-black">Details</span>
                            </div>
                            <input type="text" name='details' placeholder="Enter Coffee Details" defaultValue={loadedCoffee?.details} className="input input-bordered w-full " />
                        </label>
                    </div>

                    {/* photo  */}
                    <div className='col-span-2'>
                        <label className="form-control w-full  flex flex-col">
                            <div className="label">
                                <span className="label-text text-black">Photo</span>
                            </div>
                            <input type="text" name='photo' placeholder="Enter Photo URL" defaultValue={loadedCoffee?.photo} className="input input-bordered w-full " />
                        </label>
                    </div>

                </div>
                <input type="submit" className='btn btn-block' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;