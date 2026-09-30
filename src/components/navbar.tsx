import CartIcon from "@/static/cart-icon"
import Logo from "@/static/logo"
import { Link } from "react-router"

const linkClass = "text-white/85 hover:text-white"
const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-10 page-container flex h-(--cell) items-center justify-between text-sm">
      <Link to="/" className="flex items-center gap-2">
        <Logo className="size-7" />
        <span className="mt-2 font-clash text-2xl font-bold text-white">
          ByteSpace
        </span>
      </Link>

      <nav aria-label="Main" className="hidden items-center gap-5 md:flex">
        <Link to="/" aria-current="page" className="font-normal text-white">
          Home
        </Link>
        <Link to="/courses" className={linkClass}>
          Courses
        </Link>
        <Link to="/creators" className={linkClass}>
          Creators
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link to="/signin" className={linkClass}>
          Sign In
        </Link>
        <Link to="/join" className={linkClass}>
          Join Us
        </Link>
        <CartIcon className="w-5" />
      </div>
    </header>
  )
}

export default Navbar
