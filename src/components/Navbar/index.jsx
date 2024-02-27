import { useState } from "react";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";

const links = [
  { link: "/", label: "About" },
  { link: "/skills", label: "Skill" },
  { link: "/projects", label: "Projects" },
  { link: "/blogs", label: "Blogs" },
  { link: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link key={link.label} to={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <div className="relative sticky bg-white top-0">
      <header className={classes.header}>
        <Container size="sm" className={classes.inner}>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
          <h1>Theme</h1>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
    </div>
  );
};

export default Navbar;
