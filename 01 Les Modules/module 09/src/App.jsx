import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Produit from './pages/Produit'

const router = createBrowserRouter([
  {path:"/", element:<Home />},
  {path:"/about", element:<About />},
  {path:"/produit/:id", element:<Produit />},
])
export default function App() {


  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}


