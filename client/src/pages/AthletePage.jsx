import { Link, } from "react-router-dom";
import AccountNav from "../AccountNav";
// import { useEffect, useState } from "react";

export default function AthletePage() {
  // const [athlete, setAthlete] = useState([]);
  // useEffect(() => {
  //   axios.get('/biodata').then(({data}) => {
  //     setAthlete(data);
  //   });
  // }, []);
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
    </div>
  );
}
