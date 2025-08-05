'use client';

import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#1e1f21] text-white font-sans px-6 md:px-20 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-start md:items-center mb-16">
          <h1 className="text-xl font-semibold">Developer Portfolio</h1>
          <nav className="space-x-6 text-sm">
            <a href="/Resume-TerryTruong.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">Resume</a>
            <a href="https://github.com/Terry7788" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
          </nav>
        </header>

        {/* Hero */}
        <section className="flex flex-col md:flex-row gap-8 mb-20 w-full">
          <img
            src="/Avatar.jpg"
            alt="Profile"
            className="w-64 h-64 rounded-full border-2 border-white object-cover"
            style={{ width: '150px', height: '150px' }}
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold">Terry Truong</h2>
            <p className="text-sm text-gray-400">Full Stack Developer</p>
            <a
              href="#"
              className="text-sm text-blue-400 underline inline-block mt-1"
            >
              terrytruong.dev ↗
            </a>
            <p className="mt-4 text-gray-300">
              Full Stack Developer specializing in real-time applications and dynamic user experiences. Building responsive systems that adapt and evolve with every interaction.
            </p>
          </div>
        </section>

        <Divider style={{ backgroundColor: 'white' }} className="mb-4 mt-10" />

        {/* Experience */}
        <section className="mb-4 mt-10">
          <h3 className="text-sm uppercase text-gray-400 mb-6">Work Experience</h3>

          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <div className="text-xs text-gray-400 md:col-span-1">2024 – 2025</div>
              <div className="md:col-span-3">
                <h4 className="text-xl font-semibold">Junior Software Developer</h4>
                <p className="text-sm text-gray-400 mt-1">Milestone IT</p>
                <p className="text-sm text-gray-300 mt-2">
                  Developing scalable features using Next.js, TypeScript, and SQL. Collaborating with designers and backend developers to build intuitive UI.
                </p>
                <Divider style={{ backgroundColor: 'white', marginTop: '1.5rem' }} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <div className="text-xs text-gray-400 md:col-span-1">2020 – 2024</div>
              <div className="md:col-span-3">
                <h4 className="text-xl font-semibold">Switchboard Operator</h4>
                <p className="text-sm text-gray-400 mt-1">Austin Health</p>
                <p className="text-sm text-gray-300 mt-2">
                  Maintained communication lines and handled emergency support across medical departments, enhancing team coordination and response time.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* Projects */}
        <div className="mt-10 mb-4">
          <Divider style={{ backgroundColor: 'white' }} />
        </div>
        <section>
          <h3 className="text-sm uppercase text-gray-400 mb-6">Personal Projects</h3>
          <div className="space-y-10">
            <div
              className="group block hover:bg-gray-800/30 rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => window.open('https://volleyball-tracker-frontend.vercel.app/', '_blank')}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-48 h-32 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="/VolleyballScoreTracker.PNG"
                    alt="Volleyball Tracker Screenshot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mt-1 group-hover:underline decoration-2 underline-offset-4 transition-all duration-200">
                    Volleyball Score Tracker ↗
                  </h4>
                  <p className="text-gray-300 mt-1">
                    A full-stack volleyball match tracking application designed for mobile device use, featuring real-time scoring and match statistics. Actively used by my volleyball club for real-time scoring during practice matches. Built with TypeScript frontend and Java backend using PostgreSQL database.
                  </p>
                  <div className="flex gap-4 mt-3">
                    <a
                      href="https://github.com/Terry7788/volleyball-tracker-frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Frontend ↗
                    </a>
                    <a
                      href="https://github.com/Terry7788/volleyball-tracker-backend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Backend ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group block hover:bg-gray-800/30 rounded-lg p-4 -m-4 transition-all duration-300 ease-in-out">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-48 h-32 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="/work-in-progress.svg"
                    alt="Daily Caloric Intake Calculator Screenshot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mt-1 group-hover:underline decoration-2 underline-offset-4 transition-all duration-200">
                    Daily Caloric Intake Calculator
                  </h4>
                  <p className="text-gray-300 mt-1">
                    A responsive Next.js application using App Router, JWT authentication, and dynamic role-based routes with a clean MUI component library for tracking daily nutrition goals. <span className="text-yellow-400 text-sm font-medium">(In Progress)</span>
                  </p>
                  <div className="flex gap-4 mt-3">
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Frontend ↗
                    </a>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Backend ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <div className="mt-10 mb-4">
          <Divider style={{ backgroundColor: 'white' }} />
        </div>
        <section>
          <h3 className="text-sm uppercase text-gray-400 mb-6">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            <div className="text-xs text-gray-400 md:col-span-1">2021 – 2025</div>
            <div className="md:col-span-3">
              <h4 className="text-xl font-semibold">Bachelor of Software Engineering (Honours)</h4>
              <p className="text-sm text-gray-300 mt-1">Monash University</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <div className="mt-10 mb-4">
          <Divider style={{ backgroundColor: 'white' }} />
        </div>
        <section>
          <h3 className="text-sm uppercase text-gray-400 mb-6">Skills</h3>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <div className="text-xs text-gray-400 md:col-span-1">Frontend</div>
              <div className="md:col-span-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">HTML/CSS</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">Tailwind CSS</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <div className="text-xs text-gray-400 md:col-span-1">Backend</div>
              <div className="md:col-span-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">Python</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">Java</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">Swift</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">SQL</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">RESTful APIs</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">Express.js</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <div className="text-xs text-gray-400 md:col-span-1">Tools & Methods</div>
              <div className="md:col-span-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">Git</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">Agile</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">CI/CD</span>
                  <span className="px-3 py-1 bg-gray-700 text-sm rounded-full">Testing</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}