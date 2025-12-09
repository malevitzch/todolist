import { Link } from "react-router-dom";
export default function NavButton({ to, label }) {
    return (
        <Link to={to}>
            {label}
        </Link>
    )
}