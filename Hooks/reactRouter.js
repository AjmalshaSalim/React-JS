import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App.jsx";

const Home = () => {
  return <div>This is the home page</div>;
};
const User = () => {
  return <div>This is the user page</div>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="user/:id" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/user/:id">User</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;