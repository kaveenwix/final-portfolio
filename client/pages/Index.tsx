import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface VisibilityState {
  [key: string]: boolean;
}

export default function Index() {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animateId = (entry.target as HTMLElement).dataset.animateId;
            if (animateId) {
              setIsVisible((prev) => ({
                ...prev,
                [animateId]: true,
              }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Observe all elements with data-animate-id
    document.querySelectorAll("[data-animate-id]").forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Kaveen Wickramasinghe - UI/UX & Graphic Designer Portfolio
        </title>
        <meta
          name="description"
          content="Hey, My names Kaveen I'm an aspiring, UI/UX and graphic designer, take a look around, if you like what you see contact me down below!"
        />
        <meta
          name="keywords"
          content="Kaveen Wickramasinghe, UI/UX designer, graphic designer, portfolio, design, web design, branding, creative designer, visual design"
        />
        <meta name="author" content="Kaveen Wickramasinghe" />

        <meta
          property="og:title"
          content="Kaveen Wickramasinghe - UI/UX & Graphic Designer Portfolio"
        />
        <meta
          property="og:description"
          content="Hey, My names Kaveen I'm an aspiring, UI/UX and graphic designer, take a look around, if you like what you see contact me down below!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kaveenwickramasinghe.ca" />
        <meta property="og:image" content="/images/kaveen/kaveen.png" />
        <meta
          property="og:image:alt"
          content="Kaveen Wickramasinghe - UI/UX Designer"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kaveen Wickramasinghe - UI/UX & Graphic Designer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Hey, My names Kaveen I'm an aspiring, UI/UX and graphic designer, take a look around, if you like what you see contact me down below!"
        />
        <meta name="twitter:image" content="/images/kaveen/kaveen.png" />
        <meta name="twitter:creator" content="@kaveenwickramasinghe" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kaveenwickramasinghe.ca" />
      </Helmet>
      <div className="relative z-10">
        {/* Hero Section with Fade-in Animation - Added padding for bubble nav */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-32">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
              className="mb-8 opacity-0 translate-y-8 animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full border-4 sm:border-6 border-black overflow-hidden transform transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-2xl">
                <img
                  src="/images/kaveen/kaveen.png"
                  alt="Kaveen Wickramasinghe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="bg-white rounded-3xl p-6 sm:p-8 mb-8 shadow-lg mx-4 sm:mx-0 opacity-0 translate-y-8 animate-fadeInUp transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: "0.3s" }}
            >
              <h1 className="text-xl sm:text-2xl font-archivo font-bold text-black mb-4">
                Kaveen Wickramasinghe
              </h1>
              <p className="text-base sm:text-lg font-helvetica font-bold text-black mb-4 leading-relaxed">
                Hey, My names Kaveen I'm an aspiring, UI/UX and graphic
                designer, take a look around, if you like what you see contact
                me down below!
              </p>
              <Link
                to="/contact"
                className="inline-block text-black font-helvetica font-bold relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact me
              </Link>
            </div>

            <div
              className="animate-bounce opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.5s" }}
            >
              <ArrowDown className="mx-auto text-black" size={32} />
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-12 sm:py-20 px-4 z-10">
          <div className="max-w-6xl mx-auto">
            <div
              data-animate-id="featured"
              className={`bg-black rounded-3xl p-6 sm:p-8 mb-12 transition-all duration-1000 transform ${
                isVisible.featured
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-archivo font-bold text-white">
                  Some of my favourite pieces
                </h2>
                <Star
                  className="text-white animate-pulse"
                  size={24}
                  style={{ animationDuration: "2s" }}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 gap-4">
                {/* Project 1 - CHROMAKOPIA */}
                <div
                  className={`transition-all duration-700 transform ${
                    isVisible.featured
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: "0.2s" }}
                >
                  <div className="group cursor-pointer p-3 sm:p-4 rounded-2xl overflow-hidden">
                    <Link to="/works/chromakopia-poster" className="shadow-lg block">
                      <div className="overflow-hidden rounded-xl relative">
                        <img
                          src="/images/chromakopia.png"
                          alt="Tyler Template Project"
                          className="w-full h-96 object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                  </div>
                  <h3 className="text-white font-archivo font-bold text-center text-sm sm:text-base opacity-100 transform transition-all duration-300 group-hover:scale-105">
                    CHROMAKOPIA
                  </h3>
                </div>

                {/* Project 2 - SGA MVP */}
                <div
                  className={`lg:-translate-y-8 transition-all duration-700 transform ${
                    isVisible.featured
                      ? "opacity-100 translate-y-0 lg:-translate-y-8"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: "0.4s" }}
                >
                  <div className="group cursor-pointer p-3 sm:p-4 rounded-2xl overflow-hidden">
                    <Link to="/works/sga-long-document" className="shadow-lg block">
                      <div className="overflow-hidden rounded-xl relative">
                        <img
                          src="/images/sga.png"
                          alt="SGA MVP Project"
                          className="w-full h-96 object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                  </div>
                  <h3 className="text-white font-archivo font-bold text-center text-sm sm:text-base opacity-100 transform transition-all duration-300 group-hover:scale-105">
                    SGA-MVP
                  </h3>
                </div>

                {/* Project 3 - Cloud Cosmetics */}
                <div
                  className={`transition-all duration-700 transform ${
                    isVisible.featured
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: "0.6s" }}
                >
                  <div className="group cursor-pointer p-3 sm:p-4 rounded-2xl overflow-hidden">
                    <Link to="/works/cloud-cosmetics" className="shadow-lg block">
                      <div className="overflow-hidden rounded-xl relative">
                        <img
                          src="/images/cloudcosmetics.png"
                          alt="Cloud Cosmetics Project"
                          className="w-full h-96 object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                  </div>
                  <h3 className="text-white font-archivo font-bold text-center text-sm sm:text-base opacity-100 transform transition-all duration-300 group-hover:scale-105">
                    CLOUD
                  </h3>
                </div>
              </div>
            </div>

            <div
              data-animate-id="cta-button"
              className={`text-center transition-all duration-1000 transform ${
                isVisible["cta-button"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <Link
                to="/work"
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-helvetica font-bold transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105 transform group"
              >
                View all work
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 sm:py-20 px-4 z-10">
          <div className="max-w-4xl mx-auto">
            <div
              data-animate-id="testimonial"
              className={`bg-black rounded-3xl p-6 sm:p-8 transition-all duration-1000 transform hover:shadow-2xl hover:-translate-y-2 ${
                isVisible.testimonial
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  <img
                    src="/images/testimonials/lily.JPG"
                    alt="Lily Taylor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-archivo font-bold text-lg sm:text-xl">
                  Lily Taylor
                </h3>
              </div>

              <blockquote className="text-white font-helvetica text-sm sm:text-base leading-relaxed">
                "I've worked on a bunch of group projects with Kaveen, and he's
                one of the best people to have on your team. He's super
                reliable, always brings great ideas to the table, and knows how
                to get things done without any drama. One thing that stands out
                about Kaveen is how he balances being both creative and
                logical—whether it's problem-solving, organizing tasks, or
                making sure everyone is on the same page, he just gets it. He's
                also really easy to work with, always keeps things moving, and
                knows how to keep the vibe positive, even when deadlines are
                looming. If you're looking for someone who's hardworking,
                innovative, and just generally great to have around in any
                project, Kaveen is your guy. Highly recommend!"
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
