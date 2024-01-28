import { ModeToggle } from "@/components/mode-toggle";
import brandLogo from "../../assets/brand-logo.png"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import clsx from "clsx";
import Link from "./link";

export const NavMenu = () => {
  return (
    <div
      className={clsx(
        "flex",
        "justify-between",
        "items-center",
        "py-4",
        "px-5",
        "flex-col",
        "md:flex-row"
      )}
    >
      <div>
        <img className="h-[50px] w-auto" src={brandLogo} alt="brand-logo" />
      </div>
      <div className={clsx("flex","gap-5","py-5","md:py-0")}>
        <NavigationMenu className={clsx("border","rounded-md","border-solid","md:border-none")}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/cards">Cards</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
    </div>
  );
};
