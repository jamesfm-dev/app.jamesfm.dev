import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <header className="h-auto flex justify-center items-center shadow-md">
      <nav className="container mx-auto px-4 my-4 md:text-left text-center">
        <HeaderLogo href="https://app.jamesfm.dev" label="app.jamesfm.dev" />
      </nav>
    </header>
  );
}
