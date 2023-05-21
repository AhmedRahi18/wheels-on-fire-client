import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";
import Aos from "aos";
import 'aos/dist/aos.css';

const ToysCategories = () => {
    const [toys,setToys] = useState([])
    const [activeTab,setActiveTab] = useState("on")
    useEffect(()=>{
        Aos.init({
          duration:1000
        });
      },[])

    const handleTabClick = (tabName)=>{
        setActiveTab(tabName)
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/toys/${activeTab}`)
        .then(res => res.json())
        .then(data => setToys(data))
    },[activeTab])

    return (
        <div>
            <h2 className="text-6xl text-center font-bold text-black mt-5 mb-5">
                Shop By Category
            </h2>
            <p className="text-gray-700 font-semibold text-center mb-16">
                Find your perfect Car! Browse our shop by category section for a
                <br /> curated selection of toy cars that suit your preferences.
            </p>
            <div data-aos = "fade-up" 
            className="bg-zinc-800 p-3 rounded-lg md:w-1/2 mb-4 
            text-center mx-2 md:mx-auto">
            <p className="text-2xl mb-3 font-semibold text-white ">Select By Category</p>
            <div className=''>
                <div className="flex mb-2 justify-center">
                    <p className="text-xl mb-3 md:mb-0 font-bold border-2 border-orange-600 text-orange-600 p-2 rounded-lg me-3 hover:bg-orange-600 hover:text-white"
                   onClick={()=>handleTabClick('Sports')}>Sports Cars</p>
                    <p className="text-xl mb-3 md:mb-0 font-bold border-2 border-orange-600 text-orange-600 p-2 rounded-lg me-3 hover:bg-orange-600 hover:text-white"
                    onClick={()=>handleTabClick('Off-Road')}>Off-Road Cars</p>
                    <p className="text-xl font-bold border-2 border-orange-600 text-orange-600 p-2 rounded-lg hover:bg-orange-600 hover:text-white"
                    onClick={()=>handleTabClick('Emergency')}>Emergency Cars</p>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 md:px-5 pb-16">
                {
                    toys.map( toy => <ToyCard 
                    key={toy._id}
                    toy={toy}
                    ></ToyCard>)
                }
            </div>
        </div>
    );
};

export default ToysCategories;