import cart from "@/assets/cart.svg"
import { cn } from "cn"

const CartIcon = ({ className }: { className?: string }) => {
  return <img src={cart} alt="company-logo" className={cn(className)} />
}

export default CartIcon
