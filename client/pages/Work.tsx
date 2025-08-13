import { Helmet } from "react-helmet";
import { projects } from "../projects";
import { ArrowDown, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      <Helmet>
        <title>
          Work - Kaveen Wickramasinghe | UI/UX & Graphic Design Projects
        </title>
        <meta
          name="description"
          content="Explore Kaveen Wickramasinghe's portfolio of UI/UX and graphic design projects including Chromakopia, Cloud Cosmetics, LinkedIn redesign, and SGA branding."
        />
        <meta
          name="keywords"
          content="Kaveen Wickramasinghe work, UI/UX projects, graphic design portfolio, branding, web design, mobile app design, logo design"
        />
        <meta name="author" content="Kaveen Wickramasinghe" />

        <meta
          property="og:title"
          content="Work - Kaveen Wickramasinghe | UI/UX & Graphic Design Projects"
        />
        <meta
          property="og:description"
          content="Explore Kaveen Wickramasinghe's portfolio of UI/UX and graphic design projects including Chromakopia, Cloud Cosmetics, LinkedIn redesign, and SGA branding."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kaveenwickramasinghe.ca/work"
        />
        <meta property="og:image" content="/images/chromakopia.png" />
        <meta
          property="og:image:alt"
          content="Kaveen Wickramasinghe Design Portfolio Projects"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Work - Kaveen Wickramasinghe | UI/UX & Graphic Design Projects"
        />
        <meta
          name="twitter:description"
          content="Explore Kaveen Wickramasinghe's portfolio of UI/UX and graphic design projects including Chromakopia, Cloud Cosmetics, LinkedIn redesign, and SGA branding."
        />
        <meta name="twitter:image" content="/images/chromakopia.png" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kaveenwickramasinghe.ca/work" />
      </Helmet>
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto z-50">
          <div className="bg-black text-white rounded-2xl p-6 mb-8 inline-block">
            <h1 className="text-4xl font-archivo font-bold flex items-center">
              <span className="mr-4">Work</span>
              <Briefcase size={40} />
            </h1>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-black rounded-3xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="bg-gray-800 rounded-2xl p-4 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-fit object-cover rounded-xl"
                        style={{ marginBottom: "-50px" }}
                      />
                    </div>
                  </div>

                  <div
                    className={`text-white self-start h-full flex flex-col ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <h3 className="text-2xl font-archivo font-bold mb-4">
                      {project.title}
                    </h3>

                    <p className="font-helvetica leading-relaxed">
                      {project.description}
                    </p>

                    <div className="my-6">
                      <h4 className="font-helvetica font-bold text-lg mb-2">
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-portfolio-blue text-white px-3 py-1 rounded-full text-sm font-helvetica font-bold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-full flex justify-end h-full items-end">
                      <Link
                        to={`/works/${project.slug}`}
                        className="w-fit flex flex-row gap-2 items-center justify-center cursor-pointer"
                      >
                        <span className="text-white font-archivo font-bold text-2xl">
                          Learn more
                        </span>
                        <ArrowRight
                          className="text-white mx-auto transform"
                          size={48}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-4xl font-helvetica font-bold text-black mb-4">
              Like what you see? give me a shout!
            </h2>
            <div className="flex justify-center">
              <ArrowDown className="text-black animate-bounce" size={48} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
