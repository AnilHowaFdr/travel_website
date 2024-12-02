import { FaCheck } from "react-icons/fa";

const PopularTour = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4">
        <div className="flex items-center gap-10">
          <div className="w-1/2">
            <h4 className="heading4 text-primary">The best travel agency </h4>
            <h2 className="heading2 pt-4 pb-6">
              Discover the <span>world</span> with our guide
            </h2>
            <p className="detail py-6">
              You can choose any country with good tourism. Agency elementum
              sesue the aucan vestibulum aliquam justo in sapien rutrum
              volutpat. Donec in quis the pellentesque velit. Donec id velit ac
              arcu posuere blane.
            </p>
            <p className="detail">
              Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue
              the miss varius natoque penatibus et magnis dis parturient monte.
            </p>
            <div className="pt-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 relative bg-primary rounded-full">
                  <FaCheck className="text-white absolute top-1/3 left-1/3" />
                </div>
                <div>
                  <p className="detail">20 Years of Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <div className="w-12 h-12 relative bg-primary rounded-full">
                  <FaCheck className="text-white absolute top-1/3 left-1/3" />
                </div>
                <div>
                  <p className="detail">150+ Tours Destinations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default PopularTour;
