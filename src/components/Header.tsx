import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { UserIdentifier } from "./UserIdentifier";
import { ButtonToggleMenuMobile } from "./ButtonToggleMenuMobile";

export function Header() {
  return (
    <header className="relative h-24 bg-zinc-950/50 flex items-center justify-between lg:justify-end px-5">
      <div className="lg:hidden">
        <Logo />
      </div>

      <div className="hidden lg:block">
        <UserIdentifier />
      </div>

      <div className="block lg:hidden">
        <ButtonToggleMenuMobile>
          <Menu />
        </ButtonToggleMenuMobile>
      </div>
    </header>
  );
}
