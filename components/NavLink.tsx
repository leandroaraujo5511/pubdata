
import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";

interface INavLink {
  children: ReactNode
  href: string
}

const NavLink = ({ children, href }: INavLink) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.200",
      }}
      href={href}
    >
      {children}
    </Link>
  );

  export default NavLink