import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

function Nav() {
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
    <div className="relative">
      <Navbar fluid rounded className="sticky top-0 border-b-2 mx-30">
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
