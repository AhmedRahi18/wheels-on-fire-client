import { useContext, useEffect, useState } from "react";
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys,setMyToys] = useState([])
    const [loader,setLoader] = useState(true)
    
    useEffect(()=>{
      setLoader(true)
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)
            setLoader(false)
        })
    },[user])

    const handleDelete = id => {
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
                fetch(`http://localhost:5000/deletetoy/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    const remaining = myToys.filter(booking => booking._id !== id)
                    setMyToys(remaining)
                }
            })
              Swal.fire(
                'Deleted!',
                'Your toy has been deleted.',
                'success'
              )
            }
          })
        
            
        
    }
    
    return (
        <div>
          {
            loader?(
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
            ):(<div className="pb-10 px-3 bg-gray-200">
              <h2 className="text-5xl pt-10 mb-4 text-center text-black font-bold">My Toys</h2>
              <p className="text-gray-700 font-semibold text-center mb-16">
                Here are those amazing toy cars that you added</p>
              <div>
              <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-lg font-semibold bg-black text-gray-300">No.</th>
                <th className="text-lg font-semibold bg-black text-gray-300">Toy</th>
                <th className="text-lg font-semibold bg-black text-gray-300">Toy Name</th>
                <th className="text-lg font-semibold bg-black text-gray-300">Seller</th>
                <th className="text-lg font-semibold bg-black text-gray-300">Sub-Category</th>
                <th className="text-lg font-semibold bg-black text-gray-300">Price</th>
                <th className="text-lg font-semibold bg-black text-gray-300">Available Quantity</th>
                <th className="bg-black text-gray-300"></th>
              </tr>
            </thead>
            <tbody className="">
              {
                  myToys.map((singleToy,index)=> (
              <tr key={index}>
                <td className="bg-black border-t-2 border-t-orange-600 text-gray-300">{index+1}</td>
                <td className="bg-black border-t-2 border-t-orange-600 text-gray-300"><img className="w-16 rounded" src={singleToy.image} alt="" /></td>
                <td className="text-md border-t-2 border-t-orange-600 bg-black text-gray-300 font-semibold">{singleToy.name}</td>
                <td className="text-md border-t-2 border-t-orange-600 bg-black text-gray-300 font-semibold">{singleToy.sellerName}</td>
                <td className="text-md border-t-2 border-t-orange-600 bg-black text-gray-300 font-semibold">{singleToy.subCategory}</td>
                <td className="text-md border-t-2 border-t-orange-600 bg-black text-gray-300 font-semibold">${singleToy.price}</td>
                <td className="text-md border-t-2 border-t-orange-600 bg-black text-gray-300 font-semibold text-center">{singleToy.quantity}</td>
                <td className="bg-black border-t-2 border-t-orange-600 text-gray-300">
                  <button onClick={()=>handleDelete(singleToy._id)} className="btn border-none
                bg-red-600 hover:bg-red-700 me-2"><FaTrashAlt></FaTrashAlt> </button>
                  <Link to={`/update/${singleToy._id}`}><button className="btn border-none
                bg-teal-500 hover:bg-teal-700 me-2"><FaPen></FaPen> </button></Link>
                  <Link to={`/details/${singleToy._id}`}><button className="btn border-none
                bg-orange-500 hover:bg-orange-700 me-2">Details</button></Link>
                </td>
              </tr>
                  ) )
              }
            </tbody>
          </table>
        </div>
              </div>
          </div>)
          }
        </div>
    );
};

export default MyToys;