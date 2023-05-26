import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AosAnimation from "./components/AosAnimation";
import GoToTopButton from "./components/GoToTopButton";

function App() {
  return (


        <AosAnimation>
          <RouterProvider router={routes} />
          <GoToTopButton />
          <ToastContainer />
        </AosAnimation>

  );
}

export default App;
