/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
   /*  console.log(coffee) */
    const { _id, name, quantity, supplier, taste, Photo, category, details } = coffee;

    const handleDelete = _id => {
       /*  console.log(_id); */

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffeeShop/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                           
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success');
                                console.log(coffees.length)
                               const remaining = coffees.filter(cof=>cof._id !== _id);
                               console.log(remaining)
                               setCoffees(remaining)
                               console.log(remaining.length)

                        }
                    })
            }
        })
    }



    return (
        <div className="card  card-side bg-base-100 shadow-xl">
            <figure><img src={Photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name:{name}</h2>
                    <p>Quantity:{quantity}</p>
                    <p>Supplier:{supplier}</p>
                    <p>Details:{details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">View</button>

                        <Link to={`updateCoffee/${_id}`}> <button className="btn">Edit</button></Link>

                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;







