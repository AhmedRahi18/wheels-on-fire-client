import {  useEffect, useState } from "react";

const AllToys = () => {
    const [allToys,setAllToys] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setAllToys(data))
    },[])

    return (
        <div>
            <h2 className="text-5xl font-bold text-black text-center mt-10 mb-5">
                All Car Toys</h2>
            <p className="text-gray-700 font-semibold text-center mb-16">Discover a world of car-themed fun with our extensive collection of car toys. From racing <br /> cars to construction vehicles, fuel their imagination and adventure.</p>
            <div>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-lg bg-black text-gray-300 font-semibold">No.</th>
              <th className="text-lg bg-black text-gray-300 font-semibold">Toy</th>
              <th className="text-lg bg-black text-gray-300 font-semibold">Toy Name</th>
              <th className="text-lg bg-black text-gray-300 font-semibold">Seller</th>
              <th className="text-lg bg-black text-gray-300 font-semibold">Sub-Category</th>
              <th className="text-lg bg-black text-gray-300 font-semibold">Price</th>
              <th className="text-lg bg-black text-gray-300 font-semibold">Available Quantity</th>
              <th className="bg-black text-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {
                allToys.map((singleToy,index)=> (
            <tr key={index}>
              <td className="border-t-2 bg-black text-gray-300 border-t-orange-600">{index+1}</td>
              <td className="border-t-2 bg-black text-gray-300 border-t-orange-600"><img className="w-16" src={singleToy.image} alt="" /></td>
              <td className="text-md bg-black text-gray-300 border-t-2 border-t-orange-600 font-semibold">{singleToy.name}</td>
              <td className="text-md bg-black text-gray-300 border-t-2 border-t-orange-600 font-semibold">{singleToy.sellerName}</td>
              <td className="text-md bg-black text-gray-300 border-t-2 border-t-orange-600 font-semibold">{singleToy.subCategory}</td>
              <td className="text-md bg-black text-gray-300 border-t-2 border-t-orange-600 font-semibold">${singleToy.price}</td>
              <td className="text-md bg-black text-gray-300 border-t-2 border-t-orange-600 font-semibold text-center">{singleToy.quantity}</td>
              <td className="bg-black text-gray-300 border-t-2 border-t-orange-600 ">
                <button className="btn border-none 
              bg-orange-500 hover:bg-orange-700">Details</button>
              </td>
            </tr>
                ) )
            }
          </tbody>
        </table>
      </div>
            </div>
        </div>
    );
};

export default AllToys;