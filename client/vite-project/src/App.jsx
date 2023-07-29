import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from "./components/signup";

const router = createBrowserRouter([{ path: "/sign", element: <Signup /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
