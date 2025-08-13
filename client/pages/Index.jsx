import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Star } from "lucide-react";

export default function Index() {
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
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-black"></div>
            <div className="absolute top-40 right-40 w-24 h-24 rounded-full border-2 border-black"></div>
            <div className="absolute bottom-40 left-40 w-16 h-16 rounded-full border-2 border-black"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full border-4 sm:border-6 border-black overflow-hidden">
                <img
                  src="/images/kaveen/kaveen.png"
                  alt="Kaveen Wickramasinghe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 mb-8 shadow-lg mx-4 sm:mx-0">
              <h1 className="text-xl sm:text-2xl font-archivo font-bold text-black mb-4">
                Kaveen Wickramasinghe
              </h1>
              <p className="text-base sm:text-lg font-helvetica font-bold text-black mb-4 leading-relaxed">
                Hey, My names Kaveen I'm an aspiring, UI/UX and graphic designer,
                take a look around, if you like what you see contact me down
                below!
              </p>
              <Link
                to="/contact"
                className="text-portfolio-blue font-helvetica font-bold hover:underline"
              >
                Contact me
              </Link>
            </div>

            <div className="animate-bounce">
              <ArrowDown className="mx-auto text-black" size={32} />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-black rounded-3xl p-6 sm:p-8 mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-archivo font-bold text-white">
                  Some of my favourite pieces
                </h2>
                <Star className="text-white" size={24} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
                <div>
                  <div className="group cursor-pointer p-3 sm:p-4 rounded-2xl">
                    <Link to="/works/chromakopia-poster" className="shadow-lg">
                      <img
                        src="/images/chromakopia.png"
                        alt="Tyler Template Project"
                        className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <h3 className="text-white font-archivo font-bold text-center text-sm sm:text-base opacity-100">
                    CHROMAKOPIA
                  </h3>
                </div>

                <div className="lg:-translate-y-8">
                  <div className="group cursor-pointer p-3 sm:p-4 rounded-2xl">
                    <Link to="/works/sga-long-document" className="shadow-lg">
                      <img
                        src="/images/sga.png"
                        alt="SGA MVP Project"
                        className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <h3 className="text-white font-archivo font-bold text-center text-sm sm:text-base opacity-100">
                    SGA-MVP
                  </h3>
                </div>

                <div>
                  <div className="group cursor-pointer p-3 sm:p-4  rounded-2xl">
                    <Link to="/works/cloud-cosmetics" className="shadow-lg">
                      <img
                        src="/images/cloudcosmetics.png"
                        alt="Cloud Cosmetics Project"
                        className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <h3 className="text-white font-archivo font-bold text-center text-sm sm:text-base opacity-100">
                    CLOUD
                  </h3>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/work"
                className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-helvetica font-bold hover:bg-gray-800 transition-colors"
              >
                View all work
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black rounded-3xl p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 overflow-hidden flex-shrink-0">
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
