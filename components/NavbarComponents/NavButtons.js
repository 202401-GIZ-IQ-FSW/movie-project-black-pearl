import NavItem from "./NavItem";

function NavButtons({ isSideMenu = false }) {
  return (
    <ul
      className={`${
        isSideMenu ? "block" : "hidden"
      } md:flex md:space-x-6 text-white font-fugaz`}
    >
      <NavItem title="Genres" link="#" />
      <NavItem title="Movies" link="#" />
      <NavItem title="Series" link="#" />
    </ul>
  );
}

export default NavButtons;
