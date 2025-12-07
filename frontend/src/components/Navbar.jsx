import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="bg-blue-500 h-[5%]">
            <div className="flex space-x-4">
                <Link to="/" className="text-white hover:underline">
                  Home
                </Link>
                <Link to="/all-tasks" className="text-white hover:underline">
                  All Tasks
                </Link>
            </div>
        </nav>
    )
}