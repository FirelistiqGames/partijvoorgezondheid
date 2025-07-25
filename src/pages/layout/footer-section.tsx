import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, SendHorizonal, Sun, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

function Footerdemo() {
  {/*const [isDarkMode, setIsDarkMode] = React.useState(false)} */ }



  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const remember = localStorage.getItem("rememberDarkMode") === "true"
      const theme = localStorage.getItem("theme")
      return remember && theme === "dark"
    }
    return false
  })

  const [rememberPreference, setRememberPreference] = React.useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("rememberDarkMode") === "true"
    }
    return false
  })

  const [showCookieModal, setShowCookieModal] = React.useState(false)


  React.useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowCookieModal(true)
    }
  }, [])


  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      if (rememberPreference) {
        localStorage.setItem("theme", "dark")
      }
    } else {
      document.documentElement.classList.remove("dark")
      if (rememberPreference) {
        localStorage.setItem("theme", "light")
      }
    }
  }, [isDarkMode, rememberPreference])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl text-red-700 font-bold tracking-tight">Blijf op de hoogte!</h2>
            <p className="mb-6 text-muted-foreground text-red-700">
              Meldt u aan voor onze nieuwsbrief!
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Email"
                className="pr-12 backdrop-blur-sm "
              />
              <Button
                type="submit"
                size="icon"
                variant="outline"
                className="absolute right-1 top-0.5 h-8 w-8 rounded-full transition-transform hover:scale-105 "
              >
                <SendHorizonal className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            {/* <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" /> */}
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-red-700">Navigatie</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/home" className="block transition-colors hover:text-primary">Home</Link>
              <Link to="/over-ons" className="block transition-colors hover:text-primary">Over Ons</Link>
              <Link to="/nieuws" className="block transition-colors hover:text-primary">Nieuws</Link>
              <Link to="/wetsvoorstel" className="block transition-colors hover:text-primary">Wetsvoorstel</Link>

            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-red-700">Contact</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Willem de Zwijgersingel 5</p>
              <p>2805 BP, Gouda</p>
              <p>Telefoon: 0182-800813</p>
              <p>Email: partij.voor.gezondheid@info.nl</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-red-700">Volg ons</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 PartijvoorGezondheid. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-bold"> DISCLAIMER: Neppe politieke partij!
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="/privacy-policy" className="block transition-colors hover:text-primary">Privacy Policy</Link>
            <Link to="/terms-of-service" className="block transition-colors hover:text-primary">Terms of Service</Link>
            <button
              onClick={() => setShowCookieModal(true)}
              className="transition-colors hover:text-primary underline"
            >
              Cookie Settings
            </button>
          </nav>
        </div>
      </div>
      {showCookieModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg max-w-sm w-full shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Cookie voorkeuren</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Wilt u dat wij uw instellingen en voorkeuren onthouden met behulp van cookies? U kunt dit altijd aanpassen in Cookie Settings!
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => {
                  setRememberPreference(true)
                  localStorage.setItem("rememberDarkMode", "true")
                  localStorage.setItem("theme", isDarkMode ? "dark" : "light")
                  localStorage.setItem("cookieConsent", "true") 
                  setShowCookieModal(false)
                }}
              >
                Cookies toestaan
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  setRememberPreference(false)
                  localStorage.removeItem("rememberDarkMode")
                  localStorage.removeItem("theme")
                  localStorage.setItem("cookieConsent", "true") 
                  setShowCookieModal(false)
                }}
              >
                Cookies Weigeren
              </Button>

            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export { Footerdemo }