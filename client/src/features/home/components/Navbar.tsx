import MenuBtn from "../../../shared/components/MenuBtn"
import Logo from "../../../shared/components/Logo"

type NavbarProps = {
    children: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
    return (
        <nav>{children}</nav>
    )
}

Navbar.MenuBtn = MenuBtn
Navbar.Logo = Logo