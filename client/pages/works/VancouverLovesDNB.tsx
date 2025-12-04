import { Helmet } from "react-helmet";
import { projects } from "../../projects";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  EllipsisIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function VancouverLovesDNB() {
  const project = projects.find((p) => p.slug === "vancouver-loves-dnb");
  const nextProject = projects.find((p) => p.id === 1);

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      <Helmet>
        <title>
          Vancouver Loves Drum & Bass Posters - Kaveen Wickramasinghe | Graphic
          Design Project
        </title>
        <meta
          name="description"
          content="View my Vancouver Loves Drum & Bass event branding project, showcasing posters designed for a music event."
        />
        <meta
          name="keywords"
          content="Vancouver Loves Drum & Bass, event branding, poster design, Kaveen Wickramasinghe, graphic design, InDesign, Photoshop"
        />
        <meta name="author" content="Kaveen Wickramasinghe" />

        <meta
          property="og:title"
          content="Vancouver Loves Drum & Bass Posters - Kaveen Wickramasinghe | Graphic Design Project"
        />
        <meta
          property="og:description"
          content="View my Vancouver Loves Drum & Bass event branding project, showcasing posters designed for a music event."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://kaveenwickramasinghe.com/works/vancouver-loves-dnb"
        />
        <meta property="og:image" content="/images/vancouverlovesdnb.png" />
        <meta
          property="og:image:alt"
          content="Vancouver Loves Drum & Bass Posters by Kaveen Wickramasinghe"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vancouver Loves Drum & Bass Posters - Kaveen Wickramasinghe | Graphic Design"
        />
        <meta
          name="twitter:description"
          content="View my Vancouver Loves Drum & Bass event branding project, showcasing posters designed for a music event."
        />
        <meta name="twitter:image" content="/images/vancouverlovesdnb.png" />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://kaveenwickramasinghe.com/works/vancouver-loves-dnb"
        />
      </Helmet>
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-3xl p-8 flex flex-col gap-4">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
              <div className="w-full relative">
                <button
                  className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full size-11 grid place-items-center p-2 -left-5 lg:left-4 z-10 opacity-25 hover:opacity-100 transition-opacity"
                  onClick={() => {
                    if (imageIndex > 0) {
                      setImageIndex(imageIndex - 1);
                    } else {
                      setImageIndex(project.images.length - 1);
                    }
                  }}
                >
                  <ChevronLeft />
                </button>
                <img
                  src={project.images[imageIndex]}
                  alt={project.title}
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <button
                  className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full size-11 grid place-items-center p-2 -right-5 lg:right-4 z-10 opacity-25 hover:opacity-100 transition-opacity"
                  onClick={() => {
                    if (imageIndex < project.images.length - 1) {
                      setImageIndex(imageIndex + 1);
                    } else {
                      setImageIndex(0);
                    }
                  }}
                >
                  <ChevronRight />
                </button>
              </div>

              <div className="flex flex-col gap-4 self-start">
                <h1 className="text-4xl text-white font-archivo font-bold flex items-center">
                  {project.title}
                </h1>
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
                <p className="font-helvetica leading-relaxed text-white">
                  {project.description}
                </p>
              </div>
            </section>

            <section>
              <div className="rounded-xl bg-white p-6 mt-6">
                <div className="flex flex-row gap-2 items-center">
                  <h2 className="text-2xl text-portfolio-blue font-archivo font-bold mb4">
                    Process
                  </h2>
                  <EllipsisIcon className="text-portfolio-blue" />
                </div>
                <p className="font-helvetica leading-relaxed">
                  {project.process}
                </p>
              </div>

              <div className="rounded-xl bg-white flex flex-row items-center gap-4 p-6 mt-6">
                <div className="flex flex-row gap-2 items-center">
                  <h2 className="text-2xl text-portfolio-blue font-archivo font-bold mb4">
                    Timeline
                  </h2>
                  <Calendar className="text-portfolio-blue" />
                </div>
                <p className="font-archivo text-portfolio-blue">
                  {project.timeline}
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 mt-6">
                <div className="flex flex-row gap-2 items-center">
                  <h2 className="text-2xl text-portfolio-blue font-archivo font-bold mb4">
                    Why?
                  </h2>
                </div>
                <p className="font-helvetica leading-relaxed">{project.why}</p>
              </div>

              <div className="w-full flex justify-end h-full items-end mt-12">
                <Link
                  to={`/works/${nextProject.slug}`}
                  className="w-fit flex flex-row gap-2 items-center justify-center cursor-pointer"
                >
                  <span className="text-white font-archivo font-bold text-2xl">
                    Next Project
                  </span>
                  <ArrowRight
                    className="text-white mx-auto transform"
                    size={48}
                  />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
