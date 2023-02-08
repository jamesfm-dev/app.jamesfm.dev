import Image from "next/image";

interface NavbarLogoProps {
  label?: string;
  href: string;
}

export default function HeaderLogo({ href, label }: NavbarLogoProps) {
  return (
    <a href={href}>
      <span className="text-xl flex font-semibold">
        <Image
          src={"/favicon-32x32.png"}
          width={32}
          height={32}
          alt="Website Logo"
          unoptimized={true}
          role="img"
        />
        {label ? <span className="ml-2 hidden md:inline">{label}</span> : null}
      </span>
    </a>
  );
}
