import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

function App() {
    return (
        <Routes>

            <Route element={<AdminLayout />}>

                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/users" element={<Users />} />

                <Route path="/settings" element={<Settings />} />

                <Route
                    path="*"
                    element={<h3>404 - Page Not Found</h3>}
                />

            </Route>

        </Routes>
    );
}

export default App;