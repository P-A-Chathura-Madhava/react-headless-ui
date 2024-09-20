import Search from "../atoms/Search";
import Appname from "../atoms/Appname";
import UserData from "../molecules/UserData";

function Navbar() {
  return (
    <div className="flex justify-between px-10 pt-2">
      <Appname />
      <Search />
      <UserData />
    </div>
  );
}

export default Navbar;
