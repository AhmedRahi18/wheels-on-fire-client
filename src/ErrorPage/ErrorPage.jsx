import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
    useTitle('404')
    return (
        <div className="">
            <h2 className="text-6xl text-black font-bold text-center mt-32">
                404!!! Page Not Found :(
            </h2>
            <img className="mt-10 ms-80" src="https://p.kindpng.com/picc/s/255-2550720_car-facts-hd-png-download.png" alt="" />
            <div className="text-center mt-5">
            <Link to='/'><button className="font-bold bg-orange-600 text-white px-10 rounded-lg py-2">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;