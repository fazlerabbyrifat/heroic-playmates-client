import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useSpring, animated } from "react-spring";

const Navbar = () => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  });

  const navItems = (
    <div className="lg:flex text-xl font-semibold">
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>All Toys</Link>
      </li>
      <li>
        <Link>My Toys</Link>
      </li>
      <li>
        <Link>Add A Toy</Link>
      </li>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-5 p-2 shadow bg-base-100 rounded-box w-44"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-extrabold"
        >
          <img className="w-12" src={logo} alt="" />
          <animated.h1 style={styles} className="text-teal-500">
            Heroic Playmates
          </animated.h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end gap-5">
        <Link className="btn btn-error">Login</Link>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
