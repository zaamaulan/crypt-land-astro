import { Fragment } from "react/jsx-runtime";
import { navLinks, type NavLink } from "../../lib/constants";
import { Logo } from "./Logo";
import { Button } from "../ui/button";

export const Navigation = () => {
  return (
    <header className="container left-1/2 -translate-x-1/2 fixed top-10">
      <nav className="flex items-center justify-center w-full">
        <ul className="flex items-center gap-x-12  w-full justify-center">
          {navLinks.map((link: NavLink, index) => (
            <Fragment key={index}>
              {index === Math.ceil(navLinks.length / 2) && (
                <li className="mx-32">
                  <a href="/">
                    <Logo />
                  </a>
                </li>
              )}
              <li>
                <a
                  href={link.href}
                  className="font-light text-white text-center text-lg"
                >
                  {link.label}
                </a>
              </li>
            </Fragment>
          ))}
          <Button
            className="bg-lime-400 font-semibold text-lg px-8 py-4 rounded-full hover:bg-lime-400/90 h-[3.75rem] min-w-[11rem]"
            type="submit"
          >
            Sign up
          </Button>
        </ul>
      </nav>
    </header>
  );
};
