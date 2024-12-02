import { FaAngleDown, FaSearch } from "react-icons/fa";

// const options = [
//   { value: "DESTINATIONS", label: "Destinations" },
//   "Greece",
//   "London",
//   "Maldives",
//   "Paris",
//   "Rome",
// ];
// const options2 = [
//   { value: "DURATIONS", label: "Durations" },
//   "1 Day Tour",
//   "2-4 Days Tour",
//   "5-7 Days Tour",
//   "7+ Days Tour",
// ];

const Hero = () => {
  return (
    <section className="bg-no-repeat bg-center relative h-screen bg-cover bg-blend-overlay bg-black/50 bg-[url('/heroBg.jpg')]">
      <div className="container overlay-blue-500">
        <div className="flex flex-col justify-center absolute top-1/2 w-full left-0">
          <h4 className="heading4 text-center text-white pb-10 lg:pb-20">
            Lets Travel the world with us
          </h4>
          <h1 className="text-primary uppercase leading-[60px] text-center font-primary font-extrabold tracking-[5px] text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white to-transparent px-5">
              Explore
            </span>
            the World with
            <span className="bg-gradient-to-l from-white to-transparent text-primary px-5">
              travol
            </span>
          </h1>
        </div>
        <div className="bg-fourth hidden lg:flex p-4 absolute left-36 top-3/4 z-10">
          <div className="flex items-center">
            <div className="bg-white w-64 py-5 pl-5 pr-10 border-r-2">
              <p className="block w-full text-base text-text ">Wherer to?</p>
            </div>
            <div className="relative">
              <div className="bg-white w-64 flex items-center justify-between py-5 pl-5 pr-10 border-r-2 relative">
                <p className="block w-full text-base text-text ">
                  Destinations
                </p>
                <FaAngleDown className="text-xl text-primary" />
              </div>
            </div>
            <div>
              <div className="bg-white w-64 flex items-center justify-between p-5 border-r-2 relative">
                <p className="block w-full text-base text-text ">Duration</p>
                <FaAngleDown className="text-xl text-primary" />
              </div>
            </div>
            <div className="bg-primary w-64 cursor-pointer flex items-center justify-center gap-1 py-5 pl-5 pr-10">
              <FaSearch className="text-lg text-white" />
              <p className=" text-base text-white ">Find Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
