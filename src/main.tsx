import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './main.scss'
import TimezonePage from './pages/Timezone.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TimezonePage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />

)
