import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

function AdminLayout() {
    return (
        <div className="app-wrapper">

            {/* Header */}
            <Header />

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="app-main">
                <div className="app-content">
                    <div className="container-fluid py-3">
                        <Outlet />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default AdminLayout;