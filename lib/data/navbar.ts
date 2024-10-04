type NavLinkChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavLinkChild[];
};

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const shopNavLink: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Cart",
    href: "/cart",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default navLinks;
