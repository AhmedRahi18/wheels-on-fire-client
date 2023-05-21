import Banner from "../Banner/Banner";
import CarsGallery from "../CarsGallery/CarsGallery";
import Partners from "../Partners/Partners";
import Process from "../Process/Process";
import ToysCategories from "../ToysCategories/ToysCategories";
import useTitle from "../hooks/useTitle";

const Home = () => {
    useTitle('Home')
    return (
        <div className="bg-gray-200">
            <Banner></Banner>
            <CarsGallery></CarsGallery>
            <Partners></Partners>
            <ToysCategories></ToysCategories>
            <Process></Process>
        </div>
    );
};

export default Home;