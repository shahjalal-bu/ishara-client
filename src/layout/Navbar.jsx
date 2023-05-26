import ActiveLink from "../components/ActiveLink";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Home, All Toys, Our Product, Add A Toy, Blogs, and User profile picture.
  return (
    <>
      <nav
        data-aos="fade-down"
        className="relative  py-4 flex justify-between items-center bg-white container mx-auto px-5 sm:px-20"
      >
        <div data-aos="fade-right">
          <a className="text-3xl font-bold leading-none" to="/">
            <img className="h-14" src={logo} alt="logo" />
          </a>
        </div>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul
          className="hidden lg:ml-auto lg:flex lg:items-center justify-end lg:w-auto lg:space-x-6"
          data-aos="fade-left"
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a href="#products">Our Product</a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a href="#subscribe">Subscribe</a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
        {/* {currentUser?.email ? (
          <div className="hidden justify-center items-center gap-2 lg:flex">
            <div
              className="avatar justify-center items-center tooltip tooltip-bottom"
              data-tip={currentUser.displayName}
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={currentUser?.photoURL} />
              </div>
            </div>
            <button
              className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <ActiveLink
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
              href="/login"
            >
              Sign In
            </ActiveLink>
            <ActiveLink
              className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
              href="/register"
            >
              Sign up
            </ActiveLink>
          </>
        )} */}
      </nav>
      <div className={`navbar-menu relative z-50 ${!isOpen && "hidden"}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <ActiveLink
              className="mr-auto text-3xl font-bold leading-none"
              href="/"
            >
              <img className="h-14 w-3/4" src={logo} alt="logo" />
            </ActiveLink>
            <button className="navbar-close" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold hover:bg-blue-50  rounded"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold  hover:bg-blue-50  rounded"
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold  hover:bg-blue-50  rounded"
                  href="#products"
                >
                  Our Product
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold hover:bg-blue-50 rounded"
                  href="#subscribe"
                >
                  Subscribe
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold hover:bg-blue-50 rounded"
                  to="/blog"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="mt-auto">
            {currentUser?.email ? (
              <div className="flex justify-center items-center gap-2">
                <div
                  className="avatar justify-center items-center tooltip tooltip-bottom"
                  data-tip={currentUser?.displayName}
                >
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={currentUser?.photoURL} />
                  </div>
                </div>
                <button
                  className=" py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="pt-6 flex gap-2 justify-center">
                <button
                  className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(!isOpen);
                  }}
                >
                  Sign in
                </button>
                <button
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                  to="/register"
                  onClick={() => {
                    navigate("/register");
                    setIsOpen(!isOpen);
                  }}
                >
                  Sign Up
                </button>
              </div>
            )}
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div> */}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
