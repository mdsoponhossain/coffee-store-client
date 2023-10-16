import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee =e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const Photo = form.photo.value;
        const newCoffee ={ name,quantity,supplier,taste,category,details,Photo
        }
        console.log(newCoffee)
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire('User is added successfully')
            }
        })


    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h3 className="text-3xl font-extrabold ">Add a coffee</h3>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2 mb-8  ">
                        <label className="label">
                            <span className="label-text">Coffee Name </span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Coffee Name " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mb-8   ml-4">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form supplier and taste row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2 mb-8  ">
                        <label className="label">
                            <span className="label-text">Supplier name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mb-8  ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category  and details row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2 mb-8">
                        <label className="label">
                            <span className="label-text">Coffee category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" placeholder="Category " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mb-8 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form PHOTO url row */}
                <div className="w-full">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo URL " className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="mt-8">
                    <input className="btn btn-neutral w-full" type="submit" value="Add Coffee" />
                </div>


            </form>
        </div>
    );
};

export default AddCoffee;