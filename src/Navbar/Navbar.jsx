import { Link, NavLink } from "react-router-dom";
import logo from "../../public/images/images (1).jpeg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-zinc-800 p-3 md:rounded-t-lg md:mt-3">
      <div className="md:flex justify-between mt-5 items-center">
        <div className="flex mb-5 md:mb-0">
          <img className="w-16 rounded" src={logo} alt="" />
          <i className="text-2xl font-bold mt-3 ms-2 text-white">
            Wheels
            <span className="text-orange-600">OnFire</span>
          </i>
        </div>
        <div className="md:flex items-center gap-7 my-3 md:my-0">
          <p className="mb-2 md:mb-0">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-orange-500 px-5 py-2 rounded text-white border-r-2 border-slate-700 border-b-2"
                  : "font-semibold hover:bg-orange-500 px-3 py-1 text-gray-200 rounded hover:text-white hover:border-r-2 border-slate-700 hover:border-b-2"
              }
              to="/"
            >
              Home
            </NavLink>
          </p>
          <p className="mb-2 md:mb-0">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-orange-500 px-5 py-2 rounded text-white border-r-2 border-slate-700 border-b-2"
                  : "font-semibold hover:bg-orange-500 px-3 py-1 text-gray-200 rounded hover:text-white hover:border-r-2 border-slate-700 hover:border-b-2"
              }
              to="/alltoys"
            >
              All Toys
            </NavLink>
          </p>
          { user &&
          <p className="mb-2 md:mb-0">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold bg-orange-500 px-5 py-2 rounded text-white border-r-2 border-slate-700 border-b-2"
                : "font-semibold hover:bg-orange-500 px-3 py-1 text-gray-200 rounded hover:text-white hover:border-r-2 border-slate-700 hover:border-b-2"
            }
            to="/mytoys"
          >
            My Toys
          </NavLink>
        </p>
          }
          {user && 
          <p className="mb-2 md:mb-0">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold bg-orange-500 px-5 py-2 rounded text-white border-r-2 border-slate-700 border-b-2"
                : "font-semibold hover:bg-orange-500 px-3 py-1 text-gray-200 rounded hover:text-white hover:border-r-2 border-slate-700 hover:border-b-2"
            }
            to="/addtoys"
          >
            Add a toy
          </NavLink>
        </p>
          }
          <p className="mb-2 md:mb-0">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "font-semibold bg-orange-500 px-5 py-2 rounded text-white border-r-2 border-slate-700 border-b-2"
                  : "font-semibold hover:bg-orange-500 px-3 py-1 text-gray-200 rounded hover:text-white hover:border-r-2 border-slate-700 hover:border-b-2"
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
          </p>
        </div>
        <div className="flex items-center">
          {user && (
            <img
              title={user?.displayName}
              className="rounded-full w-12 me-2"
              src={user?.photoURL}
              alt=""
            />
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn px-10 bg-orange-600 text-gray-100 font-bold
           border-none rounded hover:bg-orange-400"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button
                  className="btn px-10 bg-orange-600 text-gray-100 font-bold
           border-none rounded hover:bg-orange-400"
                >
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
