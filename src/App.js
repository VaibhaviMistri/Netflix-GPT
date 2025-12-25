import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginOrSignup from "./components/LoginOrSignup";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      element: <Body />,
      children: [
        {
          path: "/",
          element: <LoginOrSignup />,
        },
        {
          path: "/signup",
          element: <LoginOrSignup />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <div className="font-sans">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
