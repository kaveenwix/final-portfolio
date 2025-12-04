import { Helmet } from "react-helmet";
import { Code, Paintbrush, User } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - Kaveen Wickramasinghe | UI/UX & Graphic Designer</title>
        <meta
          name="description"
          content="Learn about me, Kaveen Wickramasinghe — a UI/UX and graphic designer — and discover my skills, values, and design philosophy."
        />
        <meta
          name="keywords"
          content="About Kaveen Wickramasinghe, UI/UX designer biography, graphic designer skills, design values, teamwork, Adobe Creative Suite, Figma"
        />
        <meta name="author" content="Kaveen Wickramasinghe" />

        <meta
          property="og:title"
          content="About - Kaveen Wickramasinghe | UI/UX & Graphic Designer"
        />
        <meta
          property="og:description"
          content="Learn about me, Kaveen Wickramasinghe — a UI/UX and graphic designer — and discover my skills, values, and design philosophy"
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content="https://kaveenwickramasinghe.ca/about"
        />
        <meta property="og:image" content="/images/kaveen/kaveen4.JPG" />
        <meta
          property="og:image:alt"
          content="Kaveen Wickramasinghe Profile Photo"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About - Kaveen Wickramasinghe | UI/UX & Graphic Designer"
        />
        <meta
          name="twitter:description"
          content="Learn about me, Kaveen Wickramasinghe — a UI/UX and graphic designer — and discover my skills, values, and design philosophy"
        />
        <meta name="twitter:image" content="/images/kaveen/kaveen4.JPG" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://kaveenwickramasinghe.ca/about" />
      </Helmet>
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black text-white rounded-2xl p-6 mb-8 inline-block">
            <h1 className="text-4xl font-archivo flex items-center">
              <span className="mr-4">About</span>
              <User size={40} />
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative">
              <div className="w-80 h-72 mx-auto relative">
                <div className="absolute inset-0 bg-black rounded-3xl border-4 border-black overflow-hidden">
                  <img
                    src="/images/kaveen/kaveen4.JPG"
                    alt="Kaveen Wickramasinghe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[url('/images/kaveen/kaveen1.jpg')] bg-cover bg-center rounded-full"></div>
<div className="absolute -bottom-4 -right-4 w-36 h-36 bg-[url('/images/kaveen/kaveen2.jpg')] bg-cover bg-center rounded-full"></div>
<div className="absolute top-8 -right-8 w-28 h-28 bg-[url('/images/kaveen/kaveen3.jpg')] bg-cover bg-center rounded-full"></div>
              </div>
            </div>

            <div className="bg-black text-white rounded-3xl p-8">
              <h2 className="text-2xl font-archivo font-bold mb-6">
                Who I am!
              </h2>
              <p className="font-helvetica leading-relaxed">
                Hi there! I'm Kaveen and I'm a lover of all things media, movies,
                music. these are the things that inspire me and the work
                produce. When I'm not in school or work I'm looking for the next
                best spot to eat, thrifting, playing basketball and hanging out
                with my closest friends.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-archivo font-bold text-black mb-6">
              Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black text-white rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <Paintbrush className="mr-4" size={32} />
                  <h3 className="text-2xl font-archivo font-bold">Design</h3>
                </div>
                <ul className="font-archivo space-y-2">
                  <li>Illustrator</li>
                  <li>Photoshop</li>
                  <li>Indesign</li>
                  <li>Figma</li>
                  <li>Dimension</li>
                </ul>
              </div>

              <div className="bg-black text-white rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <Code className="mr-4" size={32} />
                  <h3 className="text-2xl font-archivo font-bold">
                    Development
                  </h3>
                </div>
                <ul className="font-archivo space-y-2">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>typescript</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-archivo font-bold text-black mb-6">
              Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black text-white rounded-3xl p-8">
                <h3 className="text-xl font-archivo font-bold mb-4">
                  Teamwork makes the dream work
                </h3>
                <p className="font-helvetica leading-relaxed">
                  Working in groups is some of my favourite things to do when
                  someone has an idea and you see them and the whole group light
                  up, excited to incorporate it into our project.
                </p>
              </div>

              <div className="bg-black text-white rounded-3xl p-8">
                <h3 className="text-xl font-archivo font-bold mb-4">
                  Criticism is constructive
                </h3>
                <p className="font-helvetica leading-relaxed">
                  When working on something asking input from friends, family,
                  and coworkers is what i think is the best thing you can do
                  because no one else is gonna keep it 100% with you and that
                  should inspire you to get better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
