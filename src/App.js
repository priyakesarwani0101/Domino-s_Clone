import logo from './logo.svg';
import './App.css';
import Menu from "./components/menu_page/menu";
import Navbar from "./components/navbar/Navbar/Navbar.jsx";
import NavbarContext from './components/navbar/Context/NavbarContext'

function App() {
  return (
    <div className="App">
     {/* <Navbar /> */}
     <NavbarContext />
      <Menu />
     

    </div>
  );
}

export default App;
