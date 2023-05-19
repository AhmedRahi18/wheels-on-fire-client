import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const toys = form.toy.value;
    const picture = form.picture.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.picture.value;
    const quantity = form.quantity.value;
    const detail = form.detail.value;
    const toysData = {
      name: toys,
      image: picture,
      sellerName: seller,
      sellerEmail: email,
      subCategory: subCategory,
      price: price,
      rating: rating,
      quantity: quantity,
      description: detail,
    }

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toysData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="">
      <h2 className="text-5xl font-bold text-center pt-16 mb-5 text-black">
        Add Toys From Here
      </h2>
      <p className="text-gray-700 font-semibold text-center mb-10">
        Rev up your toy car collection with our exclusive selection. Choose from
        a variety <br /> of models and styles to expand your high-speed
        adventures!
      </p>
      <div className="rounded-lg bg-[url('https://t4.ftcdn.net/jpg/05/77/02/47/360_F_577024786_0PFePZ5smKNkhghe4OkcDJbgCScW5t1F.jpg')] bg-cover mb-16 mt-10">
        <div
          className="rounded-lg h-full 
      bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"
        >
          <form onSubmit={handleAdd}>
            <div className="grid grid-cols-2 px-10 gap-5 pt-10">
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-gray-200 
                text-xl font-serif"
                  >
                    Toy Name
                  </span>
                </label>
                <input
                  type="text"
                  name="toy"
                  required
                  placeholder="Toy Name"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-gray-200 
                text-xl font-serif"
                  >
                    Toy Picture URL
                  </span>
                </label>
                <input
                  type="text"
                  name="picture"
                  required
                  placeholder="Toy Picture URL"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-gray-200 
                text-xl font-serif"
                  >
                    Seller Name
                  </span>
                </label>
                <input
                  type="text"
                  name="seller"
                  defaultValue={user?.displayName}
                  required
                  placeholder="Seller Name"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-gray-200 
                text-xl font-serif"
                  >
                    Seller Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  required
                  placeholder="Seller Email"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-gray-200 
                text-xl font-serif"
                  >
                    Sub-Category
                  </span>
                </label>
                <select
                  className="rounded p-2 bg-slate-200 font-bold"
                  name="subCategory"
                >
                  <option className="font-bold" value="Sports">
                    Sports
                  </option>
                  <option className="font-bold" value="Off-Road">
                    Off-Road
                  </option>
                  <option className="font-bold" value="Emergency">
                    Emergency
                  </option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-gray-200 
                text-xl font-serif"
                  >
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  name="price"
                  required
                  placeholder="Price"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-gray-200 
                text-xl font-serif"
                  >
                    Rating
                  </span>
                </label>
                <input
                  className="input input-bordered bg-slate-200 font-bold"
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                  step="0.1"
                  placeholder="Rating"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-gray-200 
                text-xl font-serif"
                  >
                    Available Quantity
                  </span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  required
                  placeholder="Available Quantity"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className="label-text text-gray-200 
                text-xl font-serif"
                  >
                    Detail Description
                  </span>
                </label>
                <input
                  type="text"
                  name="detail"
                  required
                  placeholder="Detail Description"
                  className="input input-bordered bg-slate-200 font-bold"
                />
              </div>
            </div>
            <div className="py-6 px-10">
              <input
                className="btn btn-block font-bold
             hover:bg-orange-600 bg-orange-500"
                type="submit"
                value="Add Toy"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
