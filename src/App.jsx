import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PetCategories from "./pages/PetCategories";
import Provider from "./context/Context";
import Filter from "./components/filter/Filter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cats",
      element: <PetCategories category="Cats" />,
    },
    {
      path: "/dogs",
      element: <PetCategories category="Dogs" />,
    },
    {
      path: "/rabbits",
      element: <PetCategories category="Rabbits" />,
    },
    {
      path: "/birds",
      element: <PetCategories category="Birds" />,
    },
    {
      path: '/:petId',
      element: <Filter />
    }
  ]);

  return (
    <>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
