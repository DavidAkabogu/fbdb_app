import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function AthletePage() {
  const { action } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [photo, setPhoto] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [addedPhoto, setAddedPhoto] = useState("");
  const [sport, setSport] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bio, setBio] = useState("");

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhoto((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

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
              <input
                type="text"
                value={photoLink}
                onChange={(ev) => setPhotoLink(ev.target.value)}
                placeholder={"Add using a link ....jpg"}
              />
              <button
                onClick={addPhotoByLink}
                className=" bg-green-500 rounded-xl p-2 border"
              >
                Add&nbsp;Photo
              </button>
            </div>
            <div className=" mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {addedPhoto.length > 0 &&
                addedPhoto.map((link) => (
                  <div key={""}>
                    <img
                      className="rounded-xl"
                      src={"http://localhost:4000/uploads/" + link}
                      alt=""
                    />
                  </div>
                ))}
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
            <input
              type="text"
              value={sport}
              onChange={(ev) => setSport(ev.target.value)}
              placeholder=" e.g Football, Basketball, etc"
            />

            <h2 className="text-lg mt-4 ">Name</h2>
            <p className="text-gray-500 text-sm">Athlete name </p>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              placeholder="e.g not > 100 characters "
            />

            <h2 className="text-lg mt-4 ">Age</h2>
            <p className="text-gray-500 text-sm"> Kindly provide your DOB </p>
            <input
              type="text"
              value={age}
              onChange={(ev) => setAge(ev.target.value)}
              placeholder="e.g Date of Birth "
            />

            <h2 className="text-lg mt-4 ">Weight</h2>
            <p className="text-gray-500 text-sm">Weight in pounds </p>
            <input
              type="text"
              value={weight}
              onChange={(ev) => setWeight(ev.target.value)}
              placeholder="e.g (weight in kilograms) * 2  "
            />

            <h2 className="text-lg mt-4 ">Height</h2>
            <p className="text-gray-500 text-sm"> How tall are you ? </p>
            <input
              type="text"
              value={height}
              onChange={(ev) => setHeight(ev.target.value)}
              placeholder="e.g 6'2 "
            />

            <h2 className="text-lg mt-4 "> Bio </h2>
            <p className="text-gray-500 text-sm"> Athlete description </p>
            <textarea
              value={bio}
              onChange={(ev) => setBio(ev.target.value)}
            ></textarea>

            <div>
              <button className="bg-green-500 w-full rounded-xl mt-6 p-1">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
