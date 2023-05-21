import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ToysCategories = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeTab]);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  const visibleToys = showMore ? toys : toys.slice(0, 6);

  return (
    <div>
      <h2 className="text-5xl text-center font-bold text-black mt-20 mb-7">
        Shop By Category
      </h2>
      <p className="text-gray-700 font-semibold w-3/4 md:w-1/2 mx-auto text-center mb-16">
        Find your perfect Car! Browse our shop by category section for a
         curated selection of toy cars that suit your preferences.
      </p>
      <div
        data-aos="fade-up"
        className="bg-zinc-800 p-3 rounded-lg md:w-1/2 mb-4 
            text-center mx-2 md:mx-auto"
      >
        <p className="text-2xl mb-3 font-semibold text-white ">
          Select By Category
        </p>
        <Tabs>
          <TabList className="text-orange-600 flex justify-center font-semibold text-xl">
            <Tab onClick={() => handleTabClick("All")}>All</Tab>
            <Tab onClick={() => handleTabClick("Sports")}>Sports Cars</Tab>
            <Tab onClick={() => handleTabClick("Off-Road")}>Off-Road Cars</Tab>
            <Tab onClick={() => handleTabClick("Emergency")}>
              Emergency Cars
            </Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-orange-600 font-semibold underline text-xl">
              All
            </h2>
          </TabPanel>
          <TabPanel>
            <h2 className="text-orange-600 font-semibold underline text-xl">
              Sports Cars
            </h2>
          </TabPanel>
          <TabPanel>
            <h2 className="text-orange-600 font-semibold underline text-xl">
              Off-Road Cars
            </h2>
          </TabPanel>
          <TabPanel>
            <h2 className="text-orange-600 font-semibold underline text-xl">
              Emergency Cars
            </h2>
          </TabPanel>
        </Tabs>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ms-2 md:ms-0 md:gap-5 md:px-5 pb-16">
        {visibleToys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
      {toys.length > 6 && !showMore && (
        <div className="text-center">
            <button
          className="btn bg-gradient-to-r from-orange-500 to-orange-700 border-none mb-10"
          onClick={handleShowMore}
        >
          Show More
        </button>
        </div>
      )}
      {showMore && (
        <div className="text-center">
            <button
          className="btn bg-gradient-to-r from-orange-500 to-orange-700 border-none mb-10"
          onClick={handleShowLess}
        >
          Show Less
        </button>
        </div>
      )}
    </div>
  );
};

export default ToysCategories;
