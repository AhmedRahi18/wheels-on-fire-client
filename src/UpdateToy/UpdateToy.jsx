import { FaPen } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const updateToy = useLoaderData();
  const {_id,image,price,quantity,description} = updateToy;

  const handleUpdate = event =>{
    event.preventDefault()
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    fetch(`http://localhost:5000/update/${_id}`,{
        method: 'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({price:price,quantity:quantity,description:description})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Updated Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })

  }

  return (
    <div className="bg-gray-200 rounded-lg mb-10 pb-10">
        <h2 className="text-center my-10 font-bold text-5xl pt-10">Update Your Toy Car Here</h2>
        <p></p>
      <div className="hero mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="rounded-lg w-96" src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-orange-500 bg-base-100">
            <div className="card-body">
                <div className="flex items-center">
                <FaPen></FaPen>
                <h2 className="text-xl font-bold ms-2 
                 font-serif"> Update From Here</h2>
                </div>
              <form onSubmit={handleUpdate}>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text 
                text-xl font-serif">Price</span>
                </label>
                <input
                  type="text"
                  required
                  defaultValue={price}
                  name="price"
                  placeholder="Price"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text 
                text-xl font-serif">Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  required
                  placeholder="Quantity"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span  className="label-text 
                text-xl font-serif">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  required
                  placeholder="Description"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-block font-bold
             hover:bg-orange-600 bg-orange-500 border-none" 
             type="submit" value="Update" />
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
