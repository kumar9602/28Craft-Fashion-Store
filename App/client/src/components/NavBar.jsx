import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";

export default function NavBar() {
  return (
    <div>
      <div className="container-main border-1 bg-gray-500">
        <div className="left">BLOWGROUND</div>
        <div className="center flex">
          <ul className="flex">
            <li>NEW DROPS</li>
            <li>Tops</li>
            <li>BOTTOMS</li>
            <li>ACCESSORIES</li>
          </ul>
        </div>
        <div className="right">
          <div>
            <IoSearchOutline />
          </div>

          <div>
            <BsCart3 />
          </div>

          <div>
            <FiAlignJustify />
          </div>
        </div>
      </div>
    </div>
  );
}
