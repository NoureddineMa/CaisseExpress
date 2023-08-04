import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import { ProtectedRouteEmployee , ProtectedRouteSuperAdmin , IsLoggedIn } from "./components/protectedRoutes";
import { SuperAdminLayout } from "./Layouts"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 className="flex justify-center items-center text-4xl font-bold">CAFE EXPRESS APP</h1>} />
        <Route path="/login" element={<Login />} />


      {/* <Route element={<IsLoggedIn />} > */}
      {/* superadmin */}
      <Route element={<ProtectedRouteSuperAdmin />} >
      <Route element={<SuperAdminLayout />}>
      <Route path="/superadmin" element={<h1>SUPERADMIN</h1>} />
      </Route>
      </Route>
      {/* superadmin */}
      {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
