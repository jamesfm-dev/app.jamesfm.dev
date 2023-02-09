export default function Footer() {
  return (
    <>
      <div className="mt-12" />
      <footer className="container-fluid w-full bg-black md:fixed static bottom-0">
        <div className="container p-2 mx-auto flex text-xs text-white justify-between">
          <p>
            Made with <span className="motion-safe:animate-pulse">❤️</span> by{" "}
            <a
              href="https://github.com/jamesfm-dev"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:underline"
            >
              jamesfm.dev
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
