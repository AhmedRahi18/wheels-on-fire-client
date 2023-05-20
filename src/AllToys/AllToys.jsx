import {  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { CirclesWithBar } from "react-loader-spinner";

const AllToys = () => {
    const [allToys,setAllToys] = useState([])
    const {user} = useContext(AuthContext)
    const [loader,setLoader] = useState(true)

    useEffect(()=>{
      setLoader(true)
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => {
          setAllToys(data)
          setLoader(false)
        })
    },[])

    const handleDetails = () => {
      if(!user){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "You have to login first to view details!",
          timer: 1500
        })
      }
    }

    return (
        <div>
          {loader? (
            <div className="flex justify-center items-center my-20">
            <h4 className="text-3xl font-serif font-semibold text-black">Loading...</h4>
            <CirclesWithBar
        height="100"
        width="100"
        color="#FFA500"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel='circles-with-bar-loading'
      />
        </div>
          ): (<div>
            <h2 className="text-5xl font-bold text-black text-center mt-10 mb-5">
                All Car Toys</h2>
            <p className="text-gray-700 font-semibold text-center mb-10">Discover a world of car-themed fun with our extensive collection of car toys. From racing <br /> cars to construction vehicles, fuel their imagination and adventure.</p>
            <div className="content-center text-center mb-6">
            <input className=" w-1/2 font-semibold border-2
             border-orange-500 input" type="text"
               placeholder="Search toy" />
               
            </div>
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
                <Link to={`/details/${singleToy._id}`}><button onClick={handleDetails} className="btn border-none 
              bg-orange-500 hover:bg-orange-700">Details</button></Link>
              </td>
            </tr>
                ) )
            }
          </tbody>
        </table>
      </div>
            </div>
        </div>)}
        </div>
    );
};

export default AllToys;