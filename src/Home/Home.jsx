import Banner from "../Banner/Banner";
import CarsGallery from "../CarsGallery/CarsGallery";
import ToysCategories from "../ToysCategories/ToysCategories";

const Home = () => {
    return (
        <div className="bg-gray-200">
            <Banner></Banner>
            <CarsGallery></CarsGallery>
            <ToysCategories></ToysCategories>
        </div>
    );
};

export default Home;