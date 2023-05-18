import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ToyCard = ({ toy }) => {
  const { _id, name, image, rating, price } = toy;
  return (
    <div>
      <div className="card w-96 bg-gradient-to-t from-black to-gray-800 shadow-xl">
        <figure>
          <img className=" m-3 rounded-lg" width={300} src={image} alt="" />
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
            <button className="btn bg-gradient-to-r from-orange-500 to-orange-700">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
