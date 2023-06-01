/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FiEdit, FiBell } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center sm:ml-0 ml-10 sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h5 className="text-primary">IBX Buletin</h5>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <div className="h-6 bg-gray-400 w-0.5"></div>
                <Link
                  to="/"
                  className={` px-3 pt-1 text-sm ${
                    pathname.includes("news")
                      ? "text-secondary font-medium"
                      : "text-primary font-bold"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/news"
                  className={` px-3 pt-1 text-sm ${
                    !pathname.includes("news")
                      ? "text-secondary font-medium"
                      : "text-primary font-bold"
                  }`}
                >
                  News
                </Link>
                <Link
                  to="/"
                  className="text-secondary pt-1 px-3 text-sm font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  to="/"
                  className="text-secondary pt-1 px-3 text-sm font-medium"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-6">
            <span className="text-secondary text-sm font-medium flex gap-2 items-center cursor-pointer">
              <FiEdit size={18} />
              <span className="hidden sm:block">Write</span>
            </span>
            <button type="button" className="text-secondary ">
              <span className="sr-only">View notifications</span>
              <FiBell size={18} />
            </button>

            <div className="relative">
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-7 w-7 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={showMenu ? "sm:hidden" : "hidden"} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-0">
          <Link
            to="/"
            className={`block px-3 py-2 text-base ${
              pathname.includes("news")
                ? "text-secondary font-medium"
                : "text-primary font-bold"
            }`}
          >
            Home
          </Link>
          <Link
            to="/news"
            className={`block px-3 py-2 text-base ${
              !pathname.includes("news")
                ? "text-secondary font-medium"
                : "text-primary font-bold"
            }`}
          >
            News
          </Link>
          <Link
            to=""
            className="text-secondary block px-3  py-2 text-base font-medium"
          >
            About Us
          </Link>
          <Link
            to=""
            className="text-secondary px-3 py-2 text-base block font-medium"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
}
