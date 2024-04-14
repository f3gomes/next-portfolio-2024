import Link from "next/link";
import { RiTerminalBoxLine } from "react-icons/ri";
import { NavItem } from "./nav-item";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

export function Header() {
  return (
    <header className="absolute top-0 z-10 h-24 w-full flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <RiTerminalBoxLine size={25} />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => {
            return <NavItem key={item.label} {...item} />;
          })}
        </nav>
      </div>
    </header>
  );
}
