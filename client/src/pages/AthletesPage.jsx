import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AthletesPage() {
  const { id } = useParams();
  const [athlete, setAthlete] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/biodata/${id}`).then((response) => {
      setAthlete(response.data);
    });
  }, [id]);

  if (!athlete) return "";

  return (
    <div className=" mt-8 capitalize px-8">
      <h1 className="font-bold text-3xl "> {athlete.sport} </h1>
      <a
        className="block font-semibold underline "
        href={"https://maps.google.com/?q=" + athlete.school}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        {athlete.school}{" "}
      </a>
      <div className="grid gap-2 grid-cols-[2fr_1fr] mt-4 ">
        <div> a </div>
        <div> b </div>
      </div>
    </div>
  );
}
