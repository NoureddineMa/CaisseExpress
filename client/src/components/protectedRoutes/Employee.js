import { Outlet , Navigate } from "react-router-dom";

const ProtectedRouteEmployee = () => {
    let role;
    return (
        role === "employee" ? <Outlet /> : <Navigate to="/" />
    )
}


export default ProtectedRouteEmployee;