"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-auto py-5 bg-gray-700">
      <nav className="flex flex-row  justify-around items-center">
        <div className="flex justify-start items-center">
          <Link href="/">Quick Watch Score</Link>
        </div>
        <div className="flex justify-center">
          <label class="relative block">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-blue-500" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className="placeholder:italic placeholder:text-black-400 block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black"
              placeholder="Search for Tv-show or Movie..."
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="flex justify-end">
          <ul className="flex m-2">
            <li className="mx-2">
              <Link href="/" className={`link ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li className="mx-2">
              <Link href="/TvShow" className={`link" ? "active" : ""}`}>
                TV-Show
              </Link>
            </li>
            <li className="mx-2">
              <Link href="/Movie" className={`link ? "active" : ""}`}>
                {" "}
                Movie
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
