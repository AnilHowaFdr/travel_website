import About from "./components/Home/About";
import Blog from "./components/Home/Blog";
import Contact from "./components/Home/Contact";
import Destinations from "./components/Home/Destinations";
import Gallery from "./components/Home/Gallery";
import Hero from "./components/Home/Hero";
import PopularTour from "./components/Home/PopularTour";
import SelectInput from "./components/Home/SelectInput";
import Tours from "./components/Home/Tours";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularTour />
      <SelectInput />
      <About />
      <Tours />
      <Destinations />
      <Gallery />
      <Blog />
      <Contact />
    </main>
  );
}
