import React from "react";

function Navbar() {
  return (
    <div className="py-4 px-24">
      {/* Entire Nav */}
      <div className="flex">
        <h1 className="font-bold text-2xl">
          Giving <span className="text-green-500">Garden </span> |{" "}
        </h1>

        {/* Nav Items */}
        <ul>
            <div className="flex gap-4 py-1 px-2">
            <li><a href="index.html">GivingGarden      </a></li>
            <li><a href="home.html">Home</a></li>
            <li><a href="favorites.html">Favorites</a></li>
            <li><a href="garden.html">Garden        </a></li>
            <li><a href="basket.html">Basket</a></li>
            <li><a href="profile.html">Profile</a></li>
            </div>
         </ul> 
      </div>
    </div>
  );
}
export default Navbar;