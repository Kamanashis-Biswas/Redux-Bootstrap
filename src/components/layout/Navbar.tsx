import Logo from "@/assets/Logo.png";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <img className="w-full h-8" src={Logo} alt="logo" />{" "}
        <span className="font-bold ml-2">Task</span>Master
      </div>
      <Link to="/">Tasks</Link>
      <Link to="/users">Users</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
