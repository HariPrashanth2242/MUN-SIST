import { Globe } from "lucide-react"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps = {}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Globe className="h-6 w-6 text-primary" />
      <span className="font-bold text-xl">SATHYABAMA MUN</span>
    </div>
  )
}

