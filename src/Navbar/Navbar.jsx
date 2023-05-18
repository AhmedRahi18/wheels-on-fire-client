import { Link } from "react-router-dom";
import logo from "../../public/images/images (1).jpeg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => {
      console.log(error.message)
    })
  }

  return (
    <div>
      <div className="md:flex justify-between mt-5 items-center">
        <div className="flex">
          <img className="w-16" src={logo} alt="" />
          <i className="text-2xl font-bold mt-3">
            Wheels
            <span className="text-orange-600">OnFire</span>
          </i>
        </div>
        <div className="md:flex gap-7 my-3 md:my-0">
          <p
            className="font-semibold hover:bg-orange-500 px-3 py-1
            rounded hover:text-white hover:border-r-2 border-slate-700 hover:border-b-2"
          >
            <Link to="/">Home</Link>
          </p>
          <p
            className="font-semibold hover:bg-orange-500 px-3 py-1
            rounded hover:text-white hover:border-r-2 border-slate-700 hover:border-b-2"
          >
            <Link>All Toys</Link>
          </p>
          <p
            className="font-semibold hover:bg-orange-500 px-3 py-1
            rounded hover:text-white hover:border-r-2 border-slate-700 hover:border-b-2"
          >
            <Link>My Toys</Link>
          </p>
          <p
            className="font-semibold hover:bg-orange-500 px-3 py-1
            rounded hover:text-white hover:border-r-2 border-slate-700 hover:border-b-2"
          >
            <Link>Add a toy</Link>
          </p>
          <p
            className="font-semibold hover:bg-orange-500 px-3 py-1
            rounded hover:text-white hover:border-r-2 border-slate-700 hover:border-b-2"
          >
            <Link to="/blogs">Blogs</Link>
          </p>
        </div>
        <div className="flex items-center">
          { user && <img title={user?.displayName} className="rounded-full w-12 me-2"
           src={user?.photoURL} alt="" />

          }
          { user ? <button onClick={handleLogOut}
            className="btn px-10 bg-orange-600 text-white font-bold
           border-none rounded hover:bg-orange-400"
          >
            Logout
          </button> : <><Link to="/login"><button
            className="btn px-10 bg-orange-600 text-white font-bold
           border-none rounded hover:bg-orange-400"
          >
            Login
          </button></Link></>
            
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
