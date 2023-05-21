import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Partners = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);
    
    return (
        <div>
            <div>
                <h2 className="text-4xl py-10 font-bold text-black text-center">
                    Our Retail Partners
                </h2>
                <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-4 gap-4 
                ms-10 md:ms-20">
                    <img className="rounded" src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/unimart.jpg?resize=150%2C150&ssl=1" alt="" />
                    <img className="w-40 rounded" src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/kids-mom.jpg?resize=150%2C150&ssl=1" alt="" />
                    <img className="rounded" src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/well-being.jpg?resize=150%2C150&ssl=1" alt="" />
                    <img className="w-40 rounded" src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/lavander.jpg?resize=150%2C150&ssl=1" alt="" />
                </div>
            </div>
            <div>
                <h2 className="text-4xl mt-20 mb-10 font-bold text-black text-center">
                    Our Online Partners
                </h2>
                <div data-aos="fade-up"  className="grid grid-cols-2 md:grid-cols-4 gap-4 
                 ms-10 md:ms-20">
                <img className="rounded" src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/daraz.jpg?resize=150%2C150&ssl=1" alt="" />
                    <img className="w-48 md:w-60 rounded" src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png" alt="" />
                    <img className="w-40 rounded md:ms-10" src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/panda-mart.jpg?resize=150%2C150&ssl=1" alt="" />
                    {/* <img className="rounded" src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/05/togu-mogu.jpg?resize=150%2C150&ssl=1" alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Partners;