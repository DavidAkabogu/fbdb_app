import { Link, useParams } from "react-router-dom";

export default function AthletePage() {
  const { action } = useParams();

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link className="inline-flex gap -1 " to={"/account/biodata/new"}>
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
      )}
      {action === "new" && (
        <div>
          <form action="">
            <h2 className="text-lg mt-4">Photo</h2>
            <p className="text-gray-500 text-sm"> Upload a picture </p>
            <div className="flex gap-2 ">
              <input type="text" placeholder={"Add using a link ....jpg"} />
              <button className="rounded-xl px-2 border">
                Add&nbsp;Photo
              </button>
            </div>
            <div className=" mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="flex border bg-transparent rounded-lg p-6 gap-1 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload
              </button>
            </div>

            <h2 className=" text-lg mt-4">Sport</h2>
            <p className="text-gray-500 text-sm"> What sport do you play ? </p>
            <input type="text" placeholder=" e.g Football, Basketball, etc" />

            <h2 className="text-lg mt-4 ">Name</h2>
            <p className="text-gray-500 text-sm">Athlete name </p>
            <input type="text" placeholder="e.g not > 100 characters " />

            <h2 className="text-lg mt-4 ">Age</h2>
            <p className="text-gray-500 text-sm"> Kindly provide your DOB </p>
            <input type="text" placeholder="e.g Date of Birth " />

            <h2 className="text-lg mt-4 ">Weight</h2>
            <p className="text-gray-500 text-sm">Weight in pounds </p>
            <input type="text" placeholder="e.g (weight in kilograms) * 2  " />

            <h2 className="text-lg mt-4 ">Height</h2>
            <p className="text-gray-500 text-sm"> How tall are you ? </p>
            <input type="text" placeholder="e.g 6'2 " />

            <h2 className="text-lg mt-4 "> Bio </h2>
            <p className="text-gray-500 text-sm"> Athlete description </p>
            <textarea name="" id="" cols="" rows=""></textarea>
          </form>
        </div>
      )}
    </div>
  );
}
