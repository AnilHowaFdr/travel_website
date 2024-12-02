import { FaAngleDown, FaSearch } from "react-icons/fa";

const SelectInput = () => {
  return (
    <section className="py-6 lg:hidden bg-secondary">
      <div className="px-16  container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="bg-white w-full py-5 pl-5 pr-10">
            <p className="block w-full text-base text-text ">Wherer to?</p>
          </div>
          <div>
            <div className="bg-white w-full flex items-center justify-between py-5 pl-5 pr-10 ">
              <p className="block w-full text-base text-text ">Destinations</p>
              <FaAngleDown className="text-xl text-primary" />
            </div>
            <div></div>
          </div>
          <div>
            <div className="bg-white w-full flex items-center justify-between py-5 pl-5 pr-10 ">
              <p className="block w-full text-base text-text ">Duration</p>
              <FaAngleDown className="text-xl text-primary" />
            </div>
            <div></div>
          </div>
          <div className="bg-primary w-full flex items-center justify-center gap-1 py-5 pl-5 pr-10">
            <FaSearch className="text-lg text-white" />
            <p className=" text-base text-white ">Find Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectInput;
