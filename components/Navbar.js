function Navbar() {
  return (
    <nav className="bg-[#131010] text-white font-fugaz border-b-2 border-b-[#C0434B]">
      <div className="container mx-auto flex justify-between items-center p-4 md:flex-wrap">
        {/* Logo */}
        <div className="py-2 px-8 rounded-lg bg-[#C0434B] cursor-pointer">
          <h1 className="text-2xl">Black Pearl</h1>
        </div>
        {/* Nav Buttons */}
        <ul className="hidden md:flex md:space-x-6">
          <a
            href="#"
            className="p-2 hover:text-[#C0434B] hover:color-[#C0434B] hover:border-b-2 hover:border-b-[#C0434B]"
          >
            <li>Home</li>
          </a>
          <a
            href="#"
            className="p-2 hover:text-[#C0434B] hover:color-[#C0434B] hover:border-b-2 hover:border-b-[#C0434B]"
          >
            <li>Genres</li>
          </a>
          <a
            href="#"
            className="p-2 hover:text-[#C0434B] hover:color-[#C0434B] hover:border-b-2 hover:border-b-[#C0434B]"
          >
            <li>Country</li>
          </a>
          <a
            href="#"
            className="p-2 hover:text-[#C0434B] hover:color-[#C0434B] hover:border-b-2 hover:border-b-[#C0434B]"
          >
            <li>Movie</li>
          </a>
          <a
            href="#"
            className="p-2 hover:text-[#C0434B] hover:color-[#C0434B] hover:border-b-2 hover:border-b-[#C0434B]"
          >
            <li>TV-Series</li>
          </a>
        </ul>
        {/* Search */}
        <form className="hidden lg:block">
          <input className="p-2 rounded-lg" placeholder="Search"></input>
        </form>
        {/* Humbergur */}
        <button className="lg:hidden">Menu</button>
      </div>
    </nav>
  );
}

export default Navbar;
