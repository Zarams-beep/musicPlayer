import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import HomePage from './Views/HomePage';
import { GlobalProvider } from './Component/Helper/GlobalContext';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <HomePage/>,
    },
  ])
  return (
   <>
    <GlobalProvider>
     <RouterProvider router={router}/>
     </GlobalProvider>
   </>
  )
}

export default App
