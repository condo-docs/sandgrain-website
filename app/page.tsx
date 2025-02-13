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
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div className="max-w-4xl text-center">
          {/* Hero Section */}
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
              Building intelligent solutions that transform complex data into
              actionable insights
            </p>
          </div>

          {/* Projects Section */}
          <div className="mb-16 space-y-6">
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Our Projects
            </h2>

            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-gray-900 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                    CondoScan
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    An AI-powered document analysis service that revolutionizes
                    how property managers and condo boards handle documentation.
                    Instantly extract insights, manage records, and make
                    informed decisions.
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

          {/* Contact Section */}
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
      </div>
    </main>
  );
}
