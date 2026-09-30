import Logo from "@/static/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"

const linkColumns = [
  [
    { label: "Featured Courses", to: "/courses" },
    { label: "Featured Categories", to: "/categories" },
    { label: "Business", to: "/categories/business" },
    { label: "IT", to: "/categories/it" },
    { label: "Design", to: "/categories/design" },
  ],
  [
    { label: "Development", to: "/categories/development" },
    { label: "Marketing", to: "/categories/marketing" },
    { label: "Photography", to: "/categories/photography" },
    { label: "Finance", to: "/categories/finance" },
    { label: "Sport", to: "/categories/sport" },
  ],
  [
    { label: "Become a Creator", to: "/creators/apply" },
    { label: "Affiliate Program", to: "/affiliate" },
    { label: "Contact", to: "/contact" },
    { label: "Help", to: "/help" },
    { label: "About", to: "/about" },
  ],
]

// Data array for the bottom legal links
const bottomLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms" },
]

export default function Footer() {
  return (
    <footer className="bg-background py-12 text-foreground md:py-16">
      <div className="page-container">
        <div className="mx-auto grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo className="fill-background" />
              <span className="mt-2 font-clash text-2xl font-bold">
                ByteSpace
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Wire this up to your newsletter endpoint. */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-sm items-center gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-auto w-full max-w-93 rounded-full px-6 py-3.5"
              />
              <Button
                type="submit"
                className="h-auto rounded-full bg-electric-lime px-10 py-3.5 text-accent-foreground hover:bg-electric-lime/60"
              >
                Search
              </Button>
            </form>

            <p className="max-w-xs text-[11px] text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {linkColumns.map((column, index) => (
              <ul key={index} className="space-y-3 text-xs">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 text-[13.5px] text-gray-600 md:flex-row">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {bottomLinks.map((link) => (
              <Link key={link.label} to={link.to} className="hover:text-black">
                {link.label}
              </Link>
            ))}
            <button type="button" className="hover:text-black">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
