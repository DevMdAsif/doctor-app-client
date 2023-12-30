import Accordion from "@mui/material/Accordion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Banner from "../../../component/banner/Banner";
import aboutImg from "../../../assets/images/bd802392c7d4b2b6215f.png";
import useFetchingData from "../../../Hooks/DoctorsInfo/useFetchingData";
import { useState } from "react";

function AboutUs() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const { data: abouts } = useFetchingData("http://localhost:5000/aboutUs");

  return (
    <div className="h-full bg-[#f3f4f6] pt-24 pb-20">
      <Banner
        header="Why Us"
        name=" Why Choose Us"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing."
      />
      <div className="lg:grid lg:grid-cols-2">
        <div className="hidden lg:block ml-20">
          <img src={aboutImg} alt="" />
        </div>
        <div className="mt-14 mx-5 lg:mr-20">
          {abouts.map((about) => (
            <Accordion
              key={about._id}
              expanded={expanded === about._id}
              onChange={handleChange(about._id)}
              sx={{ backgroundColor: "white" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{
                  padding: "16px 20px 0px 20px",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: "#e2e8f0",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <CheckCircleOutlineIcon />
                </Typography>

                <h3 className="md:font-bold font-medium md:text-xl md:ml-8 ml-5">
                  {about.header}
                </h3>
              </AccordionSummary>
              <AccordionDetails className="lg:mx-20 ml-10 md:ml-20">
                <Typography>{about.title}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
