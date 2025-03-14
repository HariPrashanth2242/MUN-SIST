import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/unglobe.svg" // Path to the SVG in the public folder
        alt="Unglobe"
        width={42} // Adjust the size as needed
        height={42} // Adjust the size as needed
      />
      <span className="font-bold text-xl">SATHYABAMA MUN</span>
    </div>
  );
}


