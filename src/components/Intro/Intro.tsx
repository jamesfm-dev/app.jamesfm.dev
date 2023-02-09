import Badge from "../Badge";
import {
  languages,
  css,
  technologies,
  databases,
  clouds,
} from "./data/badgeData";

export default function Intro() {
  return (
    <section className="p-4 flex flex-col font-sans">
      <h1 className="md:text-4xl text-2xl font-normal block my-12 md:text-left text-center">
        <a
          href="https://jamesfm.dev"
          className="hover:underline hover:text-blue-600"
        >
          jamesfm.dev
        </a>
        &apos;s Web App Projects
      </h1>
      <div className="text-sm md:w-4/5 md:text-left text-center">
        <p className="mb-4">
          The projects are either deployed on the cloud servers or on a
          content-delivery network. These software projects are mostly internal
          applications used by me but some of the repository are publicly
          available on my personal GitHub account.
        </p>
        <span className="mb-4 font-bold block">
          Here are the list of programming languages & technologies I am using:
        </span>
        <div className="flex-wrap">
          {languages.map((lang) => (
            <div key={lang.id} className="inline-block m-1">
              <Badge key={lang.id} label={lang.label} color={lang.color} />
            </div>
          ))}
          {css.map((css) => (
            <div key={css.id} className="inline-block m-1">
              <Badge key={css.id} label={css.label} color={css.color} />
            </div>
          ))}
          {technologies.map((tech) => (
            <div key={tech.id} className="inline-block m-1">
              {tech.label === "NextJS" ||
              tech.label === "ASP.Net Core" ||
              tech.label === "Angular" ||
              tech.label === "Entity Framework" ? (
                <Badge label={tech.label} color={tech.color + ` text-white `} />
              ) : (
                <Badge label={tech.label} color={tech.color} />
              )}
            </div>
          ))}
          {databases.map((db) => (
            <div key={db.id} className="inline-block m-1">
              {db.label === "SQLite" ? (
                <Badge label={db.label} color={db.color + ` text-white `} />
              ) : (
                <Badge label={db.label} color={db.color} />
              )}
            </div>
          ))}
          {clouds.map((cloud) => (
            <div key={cloud.id} className="inline-block m-1">
              {cloud.label === "GitHub" ? (
                <Badge
                  label={cloud.label}
                  color={cloud.color + ` text-white `}
                />
              ) : (
                <Badge label={cloud.label} color={cloud.color} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
