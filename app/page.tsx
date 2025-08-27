import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl text-center">
            <div className="space-y-6 mb-16">
              <div className="inline-block animate-fade-in">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Image
                    src="/logo.png"
                    alt="SandGrain AI Logo"
                    width={32}
                    height={32}
                    className="w-12 h-12 md:w-16 md:h-16"
                  />
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    SandGrain
                    <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
                      {" "}
                      AI
                    </span>
                  </h1>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Leveraging LLMs to solve real-world problems, starting with
                revolutionizing condominium document analysis
              </p>
            </div>
          </div>
        </section>

        {/* Business Description Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-12 text-center">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-gray-900 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                      Our Mission
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We're an AI-first startup dedicated to transforming
                      complex document analysis through the power of Large
                      Language Models. Our goal is to make document review and
                      analysis faster, more accurate, and more accessible for
                      businesses and individuals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-gray-900 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                      Target Audience
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      We currently serve realtors and condo buyers in Alberta,
                      helping them streamline the process of reviewing and
                      analyzing condominium documents to speed up closing
                      conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-12 text-center">
              Our Products
            </h2>
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-gray-900 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                    CondoScan
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    An AI-powered platform that revolutionizes how condominium
                    documents are reviewed and analyzed. Our tool helps realtors
                    and condo buyers quickly understand complex condominium
                    documents, identify key information, and make informed
                    decisions.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">
                      Currently serving paying customers in Alberta's real
                      estate market
                    </p>
                    <Link
                      href="https://condoscan.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                    >
                      Explore CondoScan
                      <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-12 text-center">
              Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ewan May",
                  role: "CEO",
                  experience:
                    "Former software developer at Arcurve and head of development at Voco",
                  image: "/images/ewan-headshot.jpeg",
                  linkedin: "https://www.linkedin.com/in/ewan-may/",
                  email: "ewan@sandgrain.ai",
                },
                {
                  name: "Nyle MacLeod",
                  role: "CRO",
                  experience: "Former head of growth at Quickly",
                  image: "/images/nyle-headshot.jpeg",
                  linkedin: "https://www.linkedin.com/in/nyle-macleod/",
                  email: "nyle@sandgrain.ai",
                },
                {
                  name: "Zakir Nurmohamed",
                  role: "In-house Expert & Product Advisor",
                  experience:
                    "Former condominium manager at Equium, current Condo/HOA manager at Simco",
                  image: "/images/zakir-headshot.jpeg",
                  linkedin:
                    "https://www.linkedin.com/in/zakir-nurmohamed-462681140/",
                  email: "zakir@sandgrain.ai",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-gray-900 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 text-center">
                      {member.image ? (
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border border-gray-700/50">
                          <Image
                            src={member.image}
                            alt={`${member.name}'s headshot`}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-gray-700/50"></div>
                      )}
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 mb-2">{member.role}</p>
                      <p className="text-gray-300 mb-4">{member.experience}</p>
                      <div className="flex justify-center space-x-4">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                            title="LinkedIn Profile"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                            title="Email"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-gray-400 text-lg">
              <p className="hover:text-gray-300 transition-colors duration-200">
                Interested in collaborating?{" "}
                <a
                  href="mailto:hello@sandgrain.ai"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
                >
                  hello@sandgrain.ai
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
