import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import ScrollDirection from "../../helpers/ScrollDirection";

function Nav() {
  const scrollDirection = ScrollDirection();
  const links = [
    { link: "/", label: "About" },
    { link: "/skills", label: "Skill" },
    { link: "/projects", label: "Projects" },
    { link: "/certification", label: "Certification" },
    { link: "/blogs", label: "Blogs" },
    { link: "/contact", label: "Contact" },
  ];
  const items = links.map((link) => (
    <NavbarLink key={link.label} className="cursor-pointer">
      <Link to={link.link}>{link.label}</Link>
    </NavbarLink>
  ));
  return (
    <div className="relative mb-16  ">
      <Navbar
        fluid
        className={`sticky ${
          scrollDirection == "down" ? "hidden" : "block"
        } top-0 fixed z-10 w-full border-b shadow-none transition-all`}>
        <NavbarToggle />
        <NavbarCollapse className="lg:pl-80">{items}</NavbarCollapse>
        <NavbarBrand className="lg:pr-80">
          <DarkThemeToggle />
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Nav;
