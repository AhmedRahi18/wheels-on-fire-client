import { useContext, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Aos from "aos";
import 'aos/dist/aos.css';

const ToyCard = ({ toy }) => {
  const {user} = useContext(AuthContext)
  const { _id, name, image, rating, price } = toy;
  
  useEffect(()=>{
    Aos.init({
      duration:1000
    });
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
    <div data-aos = "fade-up">
      <div className="card rounded-lg w-80 md:w-96 bg-gradient-to-t from-black to-zinc-600 shadow-xl">
        <figure>
          <img className="m-3 rounded-lg" width={300} src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-white">{name}</h2>
          <p className="font-semibold text-white">Price: ${price}</p>
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={
              <FaRegStar></FaRegStar>
            }
            placeholderSymbol={
              <FaStar className="text-orange-500"></FaStar>
            }
            fullSymbol={
              <FaStar></FaStar>
            }
          />
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}><button onClick={handleDetails} className="btn bg-gradient-to-r from-orange-500 to-orange-700 border-none">
              View Details
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
