import { useEffect, useState } from "react";
import axios from "axios";

function useDoctorsinfo() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctors")
      .then((doctor) => {
        setLoading(false);
        setDoctors(doctor.data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return { doctors, error, loading };
}

export default useDoctorsinfo;
