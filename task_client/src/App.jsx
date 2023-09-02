import { Outlet } from 'react-router-dom';
import './App.css';
import TopNavbar from './Components/Header/TopNavBar/TopNavBar/TopNavbar';


function App() {
  return (
    <>
      <TopNavbar></TopNavbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
