import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-persian-blue bg-grid">
      <Navbar />
      <main className="mb-12 text-center">
        <div
          aria-hidden="true"
          className="mt-22 bg-linear-to-b from-electric-lime via-electric-lime to-white/10 bg-clip-text font-poppins text-[30vw] leading-none font-bold text-transparent"
        >
          404
        </div>

        <div className="mx-auto -mt-26 max-w-4xl">
          <h1 className="relative line-clamp-2 font-poppins text-7xl leading-[1.1] font-bold tracking-tight text-white">
            The page you are looking for doesn’t exist
          </h1>
        </div>

        <p className="mt-6 text-sm text-white/90 md:mt-[3vw]">
          Try to use a correct url or go back to homepage to start again
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-full bg-electric-lime px-5 py-3 text-sm font-semibold text-[#242528] hover:brightness-105 md:mt-[3.4vw]"
        >
          Back to Home
        </a>
      </main>
      <Footer />
    </div>
  )
}
