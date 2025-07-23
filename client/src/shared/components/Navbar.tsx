import MenuBtn from "./MenuBtn"
import Logo from "./Logo"
import Info from "./Info"

type NavbarProps = {
    children: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
    const navClasses = "flex justify-between items-center mx-14.25 pt-20"

    return (
        <nav className={navClasses}>{children}</nav>
    )
}

Navbar.MenuBtn = MenuBtn
Navbar.Logo = Logo
Navbar.Info = Info