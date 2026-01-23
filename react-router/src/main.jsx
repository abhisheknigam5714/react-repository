import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Home/Home.jsx";
import About from "./about/About.jsx";
import Contact from "./about/Contact.jsx";
import { User } from "./about/User.jsx";
import { GitHub } from "./about/GitHub.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },

//       {
//         path: "about",
//         element: <About></About>,
//       },
//       {
//         path: "contact",
//         element: <Contact></Contact>,
//       },
//     ],
//   },
// ]);

//Another way of Routing--------

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<Contact />} />
      <Route path="/contact" element={<About />} />
      <Route loader={githubLoader} path="github" element={<GitHub />} />
      <Route path="user/:userid" element={<User />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
