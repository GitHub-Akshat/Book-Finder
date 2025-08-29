import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
