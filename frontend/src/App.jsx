import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AllTasks from "./pages/AllTasks.jsx";
export default function App() {
    return (
        <div className="bg-blue-300 w-full h-screen">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/all-tasks" element={<AllTasks />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
