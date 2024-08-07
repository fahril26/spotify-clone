import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import MyCollection from "./pages/MyCollection";
import Searching from "./pages/Searching";
import ErrorElement from "./ErrorElement";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import useWindowSizeContext from "./hook/useWindowSizeContext";

const App = () => {
  const { windowSizeLarge } = useWindowSizeContext();

  const root = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Searching />} />
        {!windowSizeLarge && (
          <Route path="/my-collection" element={<MyCollection />} />
        )}
        <Route path="*" element={<ErrorElement />} />
      </Route>
    )
  );

  return <RouterProvider router={root} />;
};

export default App;
