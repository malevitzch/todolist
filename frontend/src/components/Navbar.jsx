import NavButton from "./NavButton.jsx";
export default function Navbar({ items }) {
    return (
        <nav className="bg-blue-500 flex">
            <div className="flex space-x-4">
                {items.map((item, index) => (
                    <NavButton key={index} to={item.to} label={item.label} />
                ))}
            </div>
        </nav>
    )
}