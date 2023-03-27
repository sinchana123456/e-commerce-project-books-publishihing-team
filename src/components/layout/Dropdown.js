import React, { useState } from "react";
import { bookStoreDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.module.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "bookstore-submenu clicked" : "bookstore-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {bookStoreDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
