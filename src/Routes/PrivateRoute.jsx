import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CirclesWithBar } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="flex justify-center items-center my-20">
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
    }
    if(user?.email){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;