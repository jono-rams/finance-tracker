import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

// components
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={user ? <Home /> : <Navigate to="/login" replace={true} />} />
        <Route path="login" element={!user ? <Login /> : <Navigate to="/" replace={true} />} />
        <Route path="signup" element={!user ? <Signup /> : <Navigate to="/" replace={true} />} />
      </Route>
    )
  );

  return (
    <div className="App">
      {authIsReady && <RouterProvider router={router} />}
    </div>
  );
}

export default App;
