import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AthletePage() {
  const [bio, setBio] = useState([]);
  useEffect(() => {
    axios.get("/biodata").then(({ data }) => {
      setBio(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link className="inline-flex gap-1 " to={"/account/biodata/new"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          add new athlete
        </Link>
      </div>
      <div className="mt-4">
        {bio.length > 0 &&
          bio.map((athlete) => (
            <Link to={'/account/biodata/' + athlete._id} className=" flex cursor-pointer gap-4 bg-green-100 rounded-2xl p-2 " key={""}>
              <div className="flex w-32 h-32 bg-green-300 grow shrink-0 ">
                {athlete.photo.length > 0 && (
                  <img className="object-cover" src={'http://localhost:4000/uploads/' + athlete.photo[0]} alt="" />
                )}
              </div>
              <div className="grow-0 shrink" >
                <h2 className="text-xl ">{athlete.sport}</h2>
                <p className="text-sm mt-2"> {athlete.bio} </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
