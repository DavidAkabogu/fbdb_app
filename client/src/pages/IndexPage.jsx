/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";

export default function IndexPage() {
  const [bio, setBio] = useState([]);
  useEffect(() => {
    axios.get("/biodata").then((response) => {
      setBio([
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data
      ]);
    });
  });
  return (
    <div className="mt-8 grid gap-6 gap-y-8 grid-cols-2 md:grid-col-3 lg:grid-cols-4 ">
      {bio.length > 0 &&
        bio.map((athlete) => (
          <div >
            {athlete.photo?.[0] && (
              <img
                className="rounded-2xl "
                src={"http://localhost:4000/uploads/" + athlete.photo?.[0]}
                alt=""
              />
            )}
            <h3 className="font-bold">{athlete.name}</h3>
            <h2 className="uppercase " >{athlete.sport}</h2>
            
            <h4 className="text-xs" >{athlete.age}</h4>
            <h5 className="text-sm italic" >{athlete.school}</h5>
          </div>
        ))}
    </div>
  );
}
