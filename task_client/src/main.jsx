import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main/Main.jsx';
import CategoryView from './Components/Main/CategoryView/Categoryview.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Main></Main>        
      },{
        path: "/places/:category",
        element: <CategoryView></CategoryView>,
        loader: ({params})=> fetch(`https://task-server-one-theta.vercel.app/places/${params.category}`)        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
