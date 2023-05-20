import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;