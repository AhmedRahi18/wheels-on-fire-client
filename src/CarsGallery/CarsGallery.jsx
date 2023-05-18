const CarsGallery = () => {
  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-5xl text-black my-5">
          Hot Toy Cars Gallery
        </h2>
        <p className="text-gray-700 font-semibold text-center mb-16">
          Discover a captivating and hot collection of intricately designed
          <br /> and meticulously crafted best toy cars in this gallery.
        </p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 h-[450px] rounded-lg
       bg-gradient-to-t from-black to-gray-700 p-10 mb-20">
        <img className="col-span-2 rounded-lg" src="https://t4.ftcdn.net/jpg/05/77/02/47/360_F_577024786_0PFePZ5smKNkhghe4OkcDJbgCScW5t1F.jpg" alt="" />
        <img className="col-span-2 w-72 rounded-lg mt-16" src="https://i.ytimg.com/vi/TJzxcfC_z4k/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCnuHQXtK_NYFMBfHXVUsSEt987EQ" alt="" />
        <img className="row-span-3 col-span-4 rounded-lg" src="https://t4.ftcdn.net/jpg/05/70/99/49/360_F_570994916_cJyOFhj7r6MTo43snz38u4nIJkYHn6pg.jpg" alt="" />
        <img className="col-span-2 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2byBfDAsqjja1a4uIG7vkPHJcbh68DMqbKg&usqp=CAU" alt="" />
        <img className="col-span-2 w-72 rounded-lg mt-16" src="https://i.ytimg.com/vi/U7I3vArJMWM/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLA6vWRSdrnR-9JNTvGuhLz4xOC9WA" alt="" />
      </div>
    </div>
  );
};

export default CarsGallery;
