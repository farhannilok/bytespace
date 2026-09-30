import logo from "@/assets/logo.svg"
import { cn } from "cn"

const Logo = ({ className }: { className?: string }) => {
  return <img src={logo} alt="company-logo" className={cn(className)} />
}
export default Logo
