import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const details = useLoaderData();
  const {
    image,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = details;

  return (
    <div className="bg-gray-300 rounded pb-5">
      <h2 className="text-center font-bold pt-16  mb-4 text-5xl text-black">
        Details Of Your Toy Car
      </h2>
      <p className="text-gray-700 font-semibold text-center mb-16">
        Dive into the captivating details of our toy car collection. Explore
        features,details, and <br /> specifications that make each car unique
        and exciting.
      </p>
      <div className="grid grid-cols-2">
        <div className=" pb-6 ps-5 pt-5">
            <img className="rounded w-96" src={image} alt="" />
        </div>
        <div>
            <h4 className="text-4xl font-bold text-black font-serif">{name}</h4>
            <div className="flex gap-4 mt-3">
                <p className="text-xl font-serif">Seller: {sellerName}</p>
                <p className="text-xl font-serif">Seller Email: {sellerEmail}</p>
            </div>
            <h4 className="mt-5 text-xl font-serif">Detail: {description}</h4>
            <p className="mt-5 text-xl font-serif">Price: ${price}</p>
            <p className="mt-5 text-xl font-serif">Quantity: {quantity}</p>
            <p className="mt-5 text-xl font-serif ">Rating: 
            <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={
              <FaRegStar className="text-orange-500"></FaRegStar>
            }
            placeholderSymbol={
              <FaStar className="text-orange-500"></FaStar>
            }
            fullSymbol={
              <FaStar></FaStar>
            }
          />
            </p>
        </div>
      </div>
        
    </div>
  );
};

export default ToyDetails;
