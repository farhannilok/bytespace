import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
export default RootLayout
