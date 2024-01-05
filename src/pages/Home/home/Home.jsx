import Hero from "../hero/Hero";
import Services from "../services/Services";
import icon1 from "../../../assets/images/serviceImg/0f1d89dc06c5e66f56a9.svg";
import icon2 from "../../../assets/images/serviceImg/6bafbbc03e12ff3194fd.svg";
import icon3 from "../../../assets/images/serviceImg/78890ac5d9a7df685838.svg";
import icon4 from "../../../assets/images/serviceImg/bc4f1ae1bb84064a2707.svg";
import Banner from "../../../component/banner/Banner";
import Doctors from "../Doctors/Doctors";
import PricingPlan from "../pricingPlan/PricingPlan";
import AboutUs from "../aboutUs/AboutUs";

function Home() {
  return (
    <div className="max-w-8xl">
      <Hero />
      <div className="h-full mt-20">
        <Banner
          header={"OUR SERVICES"}
          name={"What can We do"}
          title={"Our Professional Services"}
        />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 mx-20 mt-10 ">
          <Services
            icon={icon1}
            name="Pet Care"
            header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
          />
          <Services
            icon={icon2}
            name="Vaccination"
            header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
          />
          <Services
            icon={icon3}
            name="Pet Grooming"
            header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
          />
          <Services
            icon={icon4}
            name="Pet Medicine"
            header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
          />
        </div>
      </div>
      <Doctors />
      <PricingPlan />
      <AboutUs />
    </div>
  );
}

export default Home;
