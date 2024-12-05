import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import BackpackIcon from "@mui/icons-material/Backpack";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeIcon from "@mui/icons-material/Home";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function NavBar() {
  return (
    <header className="shadow-md sticky bg-zinc-900 top-0 z-10 border-b border-gray-500">
      <div className="flex justify-between">
        <nav className="container mx-auto px-4 py-3 flex items-center">
          <div className="text-lg font-bold text-white mr-4 cursor-pointer flex items-center">
            <MenuIcon className="mr-2 " />
            Google
          </div>
          <div className="hidden md:flex">
            <ul className="flex space-x-4 text-gray-700">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 text-white text-sm border rounded-3xl flex items-center space-x-1 px-3 py-1"
                >
                  <BackpackIcon className="text-sm" />
                  <span>Travel</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 text-white text-sm border rounded-3xl flex items-center space-x-1 px-3 py-1"
                >
                  <TravelExploreIcon className="text-sm" />
                  <span>Explore</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 text-white text-sm border rounded-3xl flex items-center space-x-1 px-3 py-1"
                >
                  <LocalAirportIcon className="text-sm" />
                  <span>Flights</span>
                </a>
              </li>

              <a
                href="#"
                className="hover:text-blue-300 text-white text-sm border rounded-3xl flex items-center space-x-1 px-3 py-1"
              >
                <HotelIcon className="text-sm" />
                <span>Hotels</span>
              </a>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-300 text-white text-sm border rounded-3xl flex items-center space-x-1 px-3 py-1"
                >
                  <HomeIcon className="text-sm" />
                  <span>Vacation Rentals</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className=" flex mt-4">
          <a
            href="#"
            className="hover:text-blue-300 text-white text-sm  px-3 py-1"
          >
            <WbSunnyIcon className="text-sm" />
          </a>

          <a
            href="#"
            className="hover:text-blue-300 text-white text-sm  px-3 py-1"
          >
            <AppsIcon className="text-sm" />
          </a>

          <a
            href="#"
            className="hover:text-blue-300 text-white text-sm  px-3 py-1"
          >
            <AccountCircleIcon className="text-sm" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
