import {  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { CirclesWithBar } from "react-loader-spinner";
import useTitle from "../hooks/useTitle";

const AllToys = () => {
    const [allToys,setAllToys] = useState([])
    const {user} = useContext(AuthContext)
    const [loader,setLoader] = useState(true)
    const [search,setSearch] = useState('')
    useTitle('AllToys')

    useEffect(()=>{
      setLoader(true)
        fetch('https://wheels-on-fire-server.vercel.app/toys')
        .then(res => res.json())
        .then(data => {
          setAllToys(data)
          setLoader(false)
        })
    },[])

    const handleSearch = () => {
      fetch(`https://wheels-on-fire-server.vercel.app/toysearch/${search}`)
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
        setLoader(false)
      })
    }

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
        <div className="bg-gray-200">
          {loader? (
            <div className="flex justify-center items-center py-20">
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
          ): (<div className="px-3 pb-10">
            <h2 className="text-5xl font-bold text-black text-center pt-10 pb-5">
                All Car Toys</h2>
            <p className="text-gray-700 font-semibold text-center mb-10">Discover a world of car-themed fun with our extensive collection of car toys. From racing <br /> cars to construction vehicles, fuel their imagination and adventure.</p>
            <div className="content-center text-center mb-6">
            <input onChange={(e)=> setSearch(e.target.value)} className=" w-1/2 font-semibold border-2
             border-orange-500 input" type="text"
               placeholder="Search toy" />
               <button onClick={handleSearch} className="btn border-none 
              bg-orange-500 hover:bg-orange-700 ms-2">Search</button>
            </div>
            <div>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-lg bg-zinc-800 text-gray-300 font-semibold">No.</th>
              <th className="text-lg bg-zinc-800 text-gray-300 font-semibold">Toy</th>
              <th className="text-lg bg-zinc-800 text-gray-300 font-semibold">Toy Name</th>
              <th className="text-lg bg-zinc-800 text-gray-300 font-semibold">Seller</th>
              <th className="text-lg bg-zinc-800 text-gray-300 font-semibold">Sub-Category</th>
              <th className="text-lg bg-zinc-800 text-gray-300 font-semibold">Price</th>
              <th className="text-lg bg-zinc-800 text-gray-300 font-semibold">Available Quantity</th>
              <th className="bg-zinc-800 text-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            {
                allToys.map((singleToy,index)=> (
            <tr key={index}>
              <td className="border-t-2 bg-zinc-800 text-gray-300 border-t-orange-600">{index+1}</td>
              <td className="border-t-2 bg-zinc-800 text-gray-300 border-t-orange-600"><img className="w-16" src={singleToy.image} alt="" /></td>
              <td className="text-md bg-zinc-800 text-gray-300 border-t-2 border-t-orange-600 font-semibold">{singleToy.name}</td>
              <td className="text-md bg-zinc-800 text-gray-300 border-t-2 border-t-orange-600 font-semibold">{singleToy.sellerName}</td>
              <td className="text-md bg-zinc-800 text-gray-300 border-t-2 border-t-orange-600 font-semibold">{singleToy.subCategory}</td>
              <td className="text-md bg-zinc-800 text-gray-300 border-t-2 border-t-orange-600 font-semibold">${singleToy.price}</td>
              <td className="text-md bg-zinc-800 text-gray-300 border-t-2 border-t-orange-600 font-semibold text-center">{singleToy.quantity}</td>
              <td className="bg-zinc-800 text-gray-300 border-t-2 border-t-orange-600 ">
                <Link to={`/details/${singleToy._id}`}><button onClick={handleDetails}
                 className="btn border-none 
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