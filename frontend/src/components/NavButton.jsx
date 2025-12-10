import { Link } from "react-router-dom";
export default function NavButton({ to, label }) {
    return (
        <Link to={to}>
            <div className="text-3xl pl-2">{label}</div>
        </Link>
    )
}