"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <FaTimes className="text-black w-6 h-6" />
          ) : (
            <FaBars className="text-black w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-transform duration-300 ease-in-out z-20 flex flex-col items-center justify-center lg:hidden`}
      >
        <ul className="flex flex-col items-center space-y-6">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-white text-xl transition-all hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="mt-10">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
