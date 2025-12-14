import CardNav from './CardNav'
import logo from '../assets/logos/HarshPng.png';

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "/about" },
        { label: "Careers", ariaLabel: "About Careers", href: "/careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "/portfolio" },
        { label: "Case Studies", ariaLabel: "Project Case Studies", href: "/case-studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:hello@company.com" },
        { label: "Twitter", ariaLabel: "Twitter", href: "https://twitter.com/harshustle" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/harshustle/" },
        { label: "Instagram", ariaLabel: "Instagram", href: "https://www.instagram.com/harshustle/" },
        { label: "GitHub", ariaLabel: "GitHub", href: "https://github.com/harshustle" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;