import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/Img/logo.png"
const Navbar = () => {
  const authAccess = localStorage.getItem("name")
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <header>
      <div className="max-width">
        <nav>
          <div className="">
            <Link to="/">
              <img src={logo} alt="lgo" width={65} height={45} />
            </Link>
          </div>
          <div className="menus">
            <ul>
              {authAccess ? <> <li><Link to="/">Home</Link></li>
              <li><Link to="/todo-list">Todo</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                 <li onClick={handleLogout}><Link>Logout</Link></li></>
                  :
                   <li><Link to="/login">Login</Link></li>}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
