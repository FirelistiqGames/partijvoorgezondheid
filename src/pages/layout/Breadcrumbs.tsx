import { useLocation, Link } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const routeConfig: Record<string, string> = {
  "home": "Home",
  "over-ons": "Over Ons",
  "settings": "Settings",
  "nieuws": "Nieuws",
  "nieuws/opgericht": "Opgericht",
  "wetsvoorstel": "Wetsvoorstel",
  "preventieve-gezondheidszorg": "Preventieve Gezondheidszorg",
  "mentale-gezondheid": "Mentale Gezondheid",
  "subsidies-medische-studies": "Subsidies Medische Studies",
  "sportprogramma-ouderen": "Sportprogramma Ouderen en Lage Inkomens",
  "school-vertrouwenspersoon": "Vertrouwenspersoon op School",
  "ggd-samenwerking-basisscholen": "GGD Samenwerking Basisscholen",
  
}

export const Breadcrumbs = () => {
  const location = useLocation()

  // Get route path from hash, e.g. "#/over-ons" → "over-ons"
  const segments = location.pathname.split("/").filter(Boolean)


  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink asChild>
          <Link to="/home">Home</Link>
        </BreadcrumbLink>
        {segments.length > 0 && <BreadcrumbSeparator />}
      </BreadcrumbItem>

      {segments.map((segment, index) => {
        const path = "/" + segments.slice(0, index + 1).join("/")
        const joinedKey = segments.slice(0, index + 1).join("/").toLowerCase()
        const isLast = index === segments.length - 1

        const label =
          routeConfig[joinedKey] ||
          segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())

        return (
          <BreadcrumbItem key={path}>
            {isLast ? (
              <span className="text-muted-foreground truncate max-w-[180px] md:max-w-none">{label}</span>
            ) : (
              <>
                <BreadcrumbLink asChild>
                  <Link to={path}>{label}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            )}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}
