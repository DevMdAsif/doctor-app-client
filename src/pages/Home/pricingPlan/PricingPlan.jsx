import Banner from "../../../component/banner/Banner";
import PricingCart from "./PricingCart";

function PricingPlan() {
  return (
    <div>
      <Banner
        header="OUR PACKAGES"
        name="Our Pricing Plan"
        title="Our Special Package"
      />
      <div className="h-full pb-20 mt-14 space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 xl:px-20 lg:px-10 px-2">
        <PricingCart
          header="Friendly Pack"
          price={150}
          services={["Basic Checkup", "Grooming", "Pet Shower", "Vaccination"]}
        />

        <PricingCart
          header="Exclusive Pack"
          suggestion="Best Offer"
          price={175}
          services={[
            "Basic Checkup",
            "Grooming",
            "Pet Shower",
            "Vaccination",
            "Hair fall Pack",
            "30 day Services",
          ]}
        />
        <PricingCart
          header="Family Pack"
          price={200}
          services={[
            "Grooming",
            "Pet Shower",
            "Vaccination",
            "30 day Services",
          ]}
        />
      </div>
    </div>
  );
}

export default PricingPlan;
