const Banner = () => {
  return (
    <div className="mb-10">
      <div className="rounded-b-lg bg-[url('https://www.wallpapertip.com/wmimgs/0-1938_download-free-hd-3d-hd-car-fire-wallpaper.jpg')] bg-cover">
        <div className="rounded-lg h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <h2 className="text-7xl font-bold text-white w-3/4 pt-32 ps-10 ">
            Wheels <span className="text-orange-600 text-6xl">On Fire</span> <br />
            <span className="text-6xl text-slate-200 ">Toy Store</span>
          </h2>
          <p className="text-slate-300 font-semibold w-2/4 ms-10 mt-6">Explore our thrilling toy car collection for endless fun and excitement. From sleek sports cars to rugged off-road vehicles, ignite your imagination and start creating unforgettable adventures today!</p>
          <div className="pb-20">
          <button className="text-orange-600 border-2 rounded-lg px-8 py-2 border-orange-600 bg-transparent ms-9 mt-5 hover:bg-orange-600 hover:text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
