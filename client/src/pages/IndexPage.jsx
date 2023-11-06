/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const [bio, setBio] = useState([]);
  useEffect(() => {
    axios.get("/biodata").then((response) => {
      setBio(response.data);
    });
  });
  return (
    <div className="mt-8 grid gap-6 gap-y-8 grid-cols-2 md:grid-col-3 lg:grid-cols-4 ">
      {bio.length > 0 &&
        bio.map((athlete) => (
          <Link to={'/biodata/' + athlete._id} key={athlete._id} >
            {athlete.photo?.[0] && (
              <img
                className="rounded-2xl aspect-square object-cover "
                src={"http://localhost:4000/uploads/" + athlete.photo?.[0]}
                alt=""
              />
            )}
            <h3 className="font-bold capitalize ">{athlete.name}</h3>
            <h2 className="uppercase " >{athlete.sport}</h2>
            
            <h4 className="text-xs" >{athlete.age}</h4>
            <h5 className="text-sm italic capitalize" >{athlete.school}</h5>
          </Link>
        ))}
    </div>
  );
}
