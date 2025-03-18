export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="w-full flex justify-end items-center p-4">
        <img
          src="/assets/images/header_image.png"
          className="w-40 md:w-60"
          alt="Header Image"
        />
      </header>

      {/* Main Content - Centered both horizontally and vertically */}
      <main className="flex-grow flex flex-col justify-center items-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center mb-8 md:mb-12"> 
            Meet our Creation
          </h1>
          
          {/* Creators Section - Adaptive sizing */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20">
            {/* Goomah */}
            <div className="flex flex-col justify-center items-center gap-3 md:gap-4">
              <a href="https://app.goomah.id" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img
                  src="/assets/images/goomah.png"
                  className="w-32 sm:w-40 md:w-48 lg:w-60"
                  alt="Goomah"
                />
              </a>
              <a href="https://instagram.com/__goomah__" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <p className="text-lg md:text-xl lg:text-2xl">@goomah</p>
              </a>
            </div>

            {/* Moon Muffin */}
            <div className="flex flex-col justify-center items-center gap-3 md:gap-4">
              <a href="https://moonmuffin.byc.plus/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                <img
                  src="/assets/images/moon_muffin.png"
                  className="w-32 sm:w-40 md:w-48 lg:w-60"
                  alt="Moon Muffin"
                />
              </a>
              <a href="https://instagram.com/moonmuffin.cx" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <p className="text-lg md:text-xl lg:text-2xl">@moonmuffin.cx</p>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 md:px-8 py-4 flex justify-between items-center bg-white">
        <h1 className="text-2xl md:text-3xl lg:text-5xl">C+</h1>
        <p className="text-lg md:text-xl lg:text-3xl text-right">
          When art <br/> meets technology.
        </p>
      </footer>
    </div>
  );
}