import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useSpring, animated } from "react-spring";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  });

  const navItems = (
    <div className="lg:flex text-xl font-semibold">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/myToys">My Toys</Link>
          </li>
          <li>
            <Link to="/addToy">Add A Toy</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
    </div>
  );

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="navbar py-10 bg-base-100">
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
        {user && (
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 group">
              <img src={user?.photoURL} alt="Profile" />
              <span className="hidden group-hover:block absolute top-[60px] bg-gray-200 px-2 py-1 text-xs rounded">
                {user?.displayName}
              </span>
            </div>
          </div>
        )}
        {user ? (
          <Link>
            <button onClick={handleLogout} className="btn btn-error">
              {" "}
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login" className="btn btn-error">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
