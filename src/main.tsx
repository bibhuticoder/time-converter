import ReactDOM from 'react-dom/client'
import HomePage from './pages/Home.page'
import NotFoundPage from './pages/NotFound.page'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './main.scss'
import TimezonePage from './pages/Timezone.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/timezone",
    element: <TimezonePage />,
  },

  {
    path: "/404",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
