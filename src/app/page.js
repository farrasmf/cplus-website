export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full flex justify-end items-center">
        <img
          src="/assets/images/header_image.png"
          className="w-60"
        />
      </div>

      <div className="flex flex-col justify-center items-center py-28 gap-12">
        <h1 className="text-7xl"> Meet our Creation</h1>
        <div className="flex justify-center items-center gap-20">
          <div className="flex flex-col justify-center items-center gap-4">
            <a href="https://app.goomah.id" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/images/goomah.png"
                className="w-60"
                alt="Goomah"
              />
            </a>
            <a href="https://instagram.com/__goomah__" target="_blank" rel="noopener noreferrer">
              <p className="text-2xl">@goomah</p>
            </a>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <a href="https://moonmuffin.byc.plus/" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/images/moon_muffin.png"
                className="w-60"
                alt="Moon Muffin"
              />
            </a>
            <a href="https://instagram.com/moonmuffin.cx" target="_blank" rel="noopener noreferrer">
              <p className="text-2xl"> @moonmuffin.cx </p>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full absolute left-0 bottom-0 px-8 py-4 flex justify-between items-center">
        <h1 className="text-5xl">C+</h1>

        <p className="text-3xl">When art <br/> meets technology.</p>
      </div>
    </div>
  );
}