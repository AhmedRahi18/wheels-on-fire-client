import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css';

const Process = () => {
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        Aos.init({
          duration:1000
        });
      },[])

   const handleLogin = () => {
    if(user){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You have already logged in',
            showConfirmButton: true,
            timer: 1500
          })
    }
   }

  return (
    <div>
      <h2 className="text-4xl font-bold pt-10 text-center">
        How To Get Toys From Us
      </h2>
      <h5 className="text-gray-500 font-semibold pt-5 pb-16 text-center">
        You Can Buy Your Toy Car By Following This Steps
      </h5>
      <div data-aos = "fade-up" className="md:flex justify-around ms-8 pb-10 items-center">
        { user ? <div onClick={handleLogin} className="text-center w-60">
            <div className=" ms-10 hover:bg-orange-400 bg-orange-200 rounded-lg w-40">
            <img
            className="w-28 rounded-full mx-auto p-3"
            src="https://img.favpng.com/13/24/6/computer-icons-user-clip-art-png-favpng-kYCFeGyizSqBPkKhcKrF74qP5_t.jpg"
            alt=""/>
            </div>
          <div className="flex">
          <div>
          <h3 className="text-2xl text-black font-bold font-serif py-3">
            Login First
          </h3>
          <p className="text-gray-500 font-semibold">
            CLick the login button and go to the login page
          </p>
          </div>
          </div>
        </div> : <Link to='/login'>
        <div title="Click me to go" className="text-center w-60">
            <div className=" ms-10 hover:bg-orange-400 bg-orange-200 rounded-lg w-40">
            <img
            className="w-28 rounded-full mx-auto p-3"
            src="https://img.favpng.com/13/24/6/computer-icons-user-clip-art-png-favpng-kYCFeGyizSqBPkKhcKrF74qP5_t.jpg"
            alt=""/>
            </div>
          <div className="flex">
          <div>
          <h3 className="text-2xl text-black font-bold font-serif py-3">
            Login First
          </h3>
          <p className="text-gray-500 font-semibold">
            CLick the login button and go to the login page
          </p>
          </div>
          </div>
        </div>
        </Link>
        }
        <img className="transform rotate-90 w-10 h-10 ms-24 my-10 md:transform md:rotate-0 md:ms-0 md:my-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Eo_circle_orange_arrow-right.svg/768px-Eo_circle_orange_arrow-right.svg.png" alt="" />
        <Link to="/addtoys">
        <div title="Click me to go" className="text-center w-60">
            <div className=" ms-10 hover:bg-orange-400 bg-orange-200 rounded-lg w-40">
            <img
            className="w-28 rounded-3xl mx-auto p-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhZ2WzCAgg7rBN1fuPFE5uwSkVxIZN6r4Lw&usqp=CAU"
            alt=""/>
            </div>
          <div className="">
          <h3 className="text-2xl text-black font-bold font-serif py-3">
            Add A Toy Page
          </h3>
          <p className="text-gray-500 font-semibold">
            After login you have to go the Add A Toy Page
          </p>
          </div>
        </div>
        </Link>
        <img className="w-10 h-10 transform rotate-90 ms-24 mt-10  md:transform md:rotate-0 md:ms-0 md:my-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Eo_circle_orange_arrow-right.svg/768px-Eo_circle_orange_arrow-right.svg.png" alt="" />
        <Link to='/addtoys'>
        <div title="Click me to go" className="text-center mt-6 w-60">
            <div className=" ms-10 hover:bg-orange-400 bg-orange-200 rounded-lg w-40">
            <img
            className="w-28 rounded-full mx-auto p-2"
            src="https://png.pngtree.com/png-vector/20190226/ourmid/pngtree-ecommerce-business-png-image_719564.jpg"
            alt=""/>
            </div>
          <div className="">
          <h3 className="text-2xl text-black font-bold font-serif py-3">
            Give details of Toy and Add
          </h3>
          <p className="text-gray-500 font-semibold">
            Fill up those fields and click Add Toy button
          </p>
          </div>
        </div>
        </Link>
        
      </div>
    </div>
  );
};

export default Process;
