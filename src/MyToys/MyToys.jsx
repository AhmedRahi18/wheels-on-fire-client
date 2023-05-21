import { useContext, useEffect, useState } from "react";
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
import useTitle from "../hooks/useTitle";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys,setMyToys] = useState([])
    const [loader,setLoader] = useState(true)
    const [sortBy, setSortBy] = useState("");
    useTitle('MyToys')
    
    useEffect(()=>{
      setLoader(true)
        fetch(`https://wheels-on-fire-server.vercel.app/mytoys/${user?.email}?sortBy=${sortBy}`)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)
            setLoader(false)
        })
    },[user,sortBy])

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
                fetch(`https://wheels-on-fire-server.vercel.app/deletetoy/${id}`,{
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
        const handleSortChange = e => {
          setSortBy(e.target.value);
        };
        
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
              <div className="flex justify-end pb-5 me-5">
              <select
                  className="rounded p-2 bg-zinc-500 font-bold"
                  name="subCategory"
                  value={sortBy}
          onChange={handleSortChange}
                >
                  <option className="font-bold text-orange-600" value="">
                  Sort by
                  </option>
                  <option className="font-bold text-orange-600" value="desc">
                  descending
                  </option>
                  <option className="font-bold text-orange-600" value="asc">
                  ascending
                  </option>
                </select>
              </div>
              <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-lg font-semibold bg-zinc-800 text-gray-300">No.</th>
                <th className="text-lg font-semibold bg-zinc-800 text-gray-300">Toy</th>
                <th className="text-lg font-semibold bg-zinc-800 text-gray-300">Toy Name</th>
                <th className="text-lg font-semibold bg-zinc-800 text-gray-300">Seller</th>
                <th className="text-lg font-semibold bg-zinc-800 text-gray-300">Sub-Category</th>
                <th className="text-lg font-semibold bg-zinc-800 text-gray-300">Price</th>
                <th className="text-lg font-semibold bg-zinc-800 text-gray-300">Available Quantity</th>
                <th className="bg-zinc-800 text-gray-300"></th>
              </tr>
            </thead>
            <tbody className="">
              {
                  myToys.map((singleToy,index)=> (
              <tr key={index}>
                <td className="bg-zinc-800 border-t-2 border-t-orange-600 text-gray-300">{index+1}</td>
                <td className="bg-zinc-800 border-t-2 border-t-orange-600 text-gray-300"><img className="w-16 rounded" src={singleToy.image} alt="" /></td>
                <td className="text-md border-t-2 border-t-orange-600 bg-zinc-800 text-gray-300 font-semibold">{singleToy.name}</td>
                <td className="text-md border-t-2 border-t-orange-600 bg-zinc-800 text-gray-300 font-semibold">{singleToy.sellerName}</td>
                <td className="text-md border-t-2 border-t-orange-600 bg-zinc-800 text-gray-300 font-semibold">{singleToy.subCategory}</td>
                <td className="text-md border-t-2 border-t-orange-600 bg-zinc-800 text-gray-300 font-semibold">${singleToy.price}</td>
                <td className="text-md border-t-2 border-t-orange-600 bg-zinc-800 text-gray-300 font-semibold text-center">{singleToy.quantity}</td>
                <td className="bg-zinc-800 border-t-2 border-t-orange-600 text-gray-300">
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