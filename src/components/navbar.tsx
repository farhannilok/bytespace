import Logo from "@/static/logo"
import { Link } from "react-router"

const linkClass = "text-white/85 hover:text-white"
const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between px-[6vw] text-[13px] md:px-[8.6vw]">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-[17px] font-bold"
      >
        <Logo />
        <span className="font-clash text-white">ByteSpace</span>
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
        <svg
          viewBox="0 0 14 16"
          width="14"
          height="16"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.4"
          aria-label="Cart"
        >
          <path d="M2 4.5h10l.8 10H1.2z" strokeLinejoin="round" />
          <path d="M4.5 6.5v-3a2.5 2.5 0 015 0v3" />
        </svg>
      </div>
    </header>
  )
}

export default Navbar
