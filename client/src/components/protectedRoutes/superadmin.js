import { Outlet , Navigate } from "react-router-dom";

const ProtectedRouteSuperAdmin = () => {
    let role = localStorage.getItem("role")
    return (
        role === "superadmin" ? <Outlet /> : <Navigate to="/" />
    )
}


export default ProtectedRouteSuperAdmin;