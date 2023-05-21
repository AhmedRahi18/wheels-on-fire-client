import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const CarsGallery = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000
    });
  },[])
  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-5xl text-black mt-16 mb-5">
          Hot Toy Cars Gallery
        </h2>
        <p className="text-gray-700 font-semibold text-center w-96 md:w-1/2 mx-auto mb-16">
          Discover a captivating and hot collection of intricately designed
           and meticulously crafted best toy cars in this gallery.
        </p>
      </div>
      <div className="bg-gradient-to-t from-black to-gray-700 rounded-lg mb-20">
      <div
        className="grid grid-rows-3 grid-flow-col gap-7 h-[300px] md:h-[420px] 
        p-5 md:p-10 "
      >
        <img
          data-aos = "fade-left"
          className="md:col-span-2 rounded-lg"
          src="https://t4.ftcdn.net/jpg/05/77/02/47/360_F_577024786_0PFePZ5smKNkhghe4OkcDJbgCScW5t1F.jpg"
          alt=""
        />
        <img
        data-aos = "fade-left"
          className="md:col-span-2 w-72 ms-3 rounded-lg mt-20 md:mt-24"
          src="https://i.ytimg.com/vi/TJzxcfC_z4k/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCnuHQXtK_NYFMBfHXVUsSEt987EQ"
          alt=""
        />
        <img
        data-aos = "fade-up"
          className="md:row-span-3 invisible md:visible md:col-span-4 mt-2 rounded-lg"
          src="https://t4.ftcdn.net/jpg/05/70/99/49/360_F_570994916_cJyOFhj7r6MTo43snz38u4nIJkYHn6pg.jpg"
          alt=""
        />
        <img
        data-aos = "fade-right"
          className="md:col-span-2 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2byBfDAsqjja1a4uIG7vkPHJcbh68DMqbKg&usqp=CAU"
          alt=""
        />
        <img
        data-aos = "fade-right"
          className="md:col-span-2 w-80 rounded-lg mt-20 md:mt-24"
          src="https://i.ytimg.com/vi/U7I3vArJMWM/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLA6vWRSdrnR-9JNTvGuhLz4xOC9WA"
          alt=""
        />
        </div>
        <div className="flex justify-around p-10 pt-5">
        <img
        data-aos = "fade-down"
          className="rounded-lg w-1/2 me-5 mt-5"
          src="https://i.ytimg.com/vi/b6nEwGWYJnU/maxresdefault.jpg"
          alt=""
        />
        <img
        data-aos = "fade-down"
          className="rounded-lg w-1/2 mt-5"
          src="https://i.pinimg.com/736x/d1/8f/d7/d18fd71b038ce473e2de21e7f22534b8.jpg"
          alt=""
        />
        </div>
      
      </div>
    </div>
  );
};

export default CarsGallery;
