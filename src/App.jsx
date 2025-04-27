
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Swal from 'sweetalert2';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  const handleDelete = _id => {
    fetch(`http://localhost:6010/coffee/${_id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });

          const remaining = coffees.filter(coffee => coffee._id !== _id);
          setCoffees(remaining);
        }
      })
  }

  return (
    <>

      <div className=''>
        <div className='mx-20'>
          
          <h1 className='text-5xl text-center p-10'>Hot-Cold Coffee: {coffees.length}</h1>
          <div className='grid md: grid-cols-2 gap-5'>
            {
              coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} onDelete={handleDelete}></CoffeeCard>)
            }
          </div>
        </div>
      </div>

    </>
  )
}


/**
 * 1. https://i.ibb.co.com/7Nr3xcDC/6.png
 * 2. https://i.ibb.co.com/Xk630FVF/1.png
 * 3. https://i.ibb.co.com/KxF6NwT2/2.png
 * 4. https://i.ibb.co.com/6cGdqSXz/3.png
 * 5. https://i.ibb.co.com/0yg63r3r/4.png
 * 6. https://i.ibb.co.com/0RSVSHz8/5.png
 * 7. https://i.ibb.co.com/xScQrpFB/16.png
 */

export default App
