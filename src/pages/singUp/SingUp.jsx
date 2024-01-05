import doctor from "../../assets/images/singup/doctor1.svg";
import patient from "../../assets/images/singup/patient1.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SingUpCard from "../../component/singUpCard/SingUpCard";
import { Link } from "react-router-dom";
function SingUp() {
  return (
    <div className="h-[85vh] flex justify-center items-center">
      <div className="space-y-10 ">
        <Link to="/login">
          <p className="inline-flex text-[#959595] hover:text-[#51a3fb] duration-500 ">
            <FaArrowLeft className="mt-1" />
            <span className="text-sm ml-2">Back to Login</span>
          </p>
        </Link>
        <h3 className="text-4xl font-bold text-[#262937]">Singup</h3>
        <div>
          <Link to="doctor">
            <SingUpCard
              img={doctor}
              header="Doctor"
              title="Lorem ipsum dolor sit amet consectetur."
              icon={<FaArrowRight />}
            />
          </Link>
          <Link to="patient">
            <div className="mt-7">
              <SingUpCard
                img={patient}
                header="Patient"
                title="Lorem ipsum dolor sit amet consectetur."
                icon={<FaArrowRight />}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
