import { projects } from "../../projects";
import { ArrowRight, Calendar, EllipsisIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Chromakopia() {
  const project = projects.find((p) => p.slug === "chromakopia-poster");
  const nextProject = projects.find((p) => p.id === project.id + 1);

  return (
    <div className="relative z-10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black rounded-3xl p-8 flex flex-col gap-4">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <div className="w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-2xl object-cover"
              />
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
              <p className="font-helvetica font-bold mb-6 leading-relaxed text-white">
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
              <p className="font-helvetica font-bold leading-relaxed">
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
              <p className="font-helvetica font-bold leading-relaxed">
                {project.why}
              </p>
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
  );
}
