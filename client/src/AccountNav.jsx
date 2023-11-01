import { Link, useLocation } from "react-router-dom";

export default function AccountNav() {
  const {pathname} = useLocation();
  let subpage = pathname.split('/')?.[2];
  if (subpage === undefined) {
    subpage = 'profile';
  }
  function linkClasses(type = null) {
    let classes = "inline-flex gap-1 py-2 px-6";
    if (type === subpage) {
      classes += " rounded-full";
    } else {
      classes += "bg-green-300";
    }
    return classes;
  }

  return (
    <nav className="w-full flex justify-center mt-8 gap-4 mb-8">
      <Link className={linkClasses("profile")} to={"/account"}>
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
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>{" "}
        Profile{" "}
      </Link>
      <Link className={linkClasses("biodata")} to={"/account/biodata"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>{" "}
        Biodata{" "}
      </Link>
    </nav>
  );
}
