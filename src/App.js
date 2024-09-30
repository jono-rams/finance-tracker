import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={null}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
