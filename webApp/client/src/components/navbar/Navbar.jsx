import { useContext, useState } from "react";
import "./navbar.css";
import { AUTHContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useContext(AUTHContext);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleClick = () => {
    navigate('/');
  };

  const loginClick = () => {
    navigate ("/login")
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleClick}>FIZZY</span>
        {user ? (
          <UserMenu onLogout={handleLogout} user={user} />
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={loginClick}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

const UserMenu = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="user-menu">
      <div onClick={toggleDropdown} className="user-icon">
        <FontAwesomeIcon icon={faUser} />
        <span>{user.username}</span>
      </div>
      {dropdownOpen && <DropDownProfile onLogout={onLogout} />}
    </div>
  );
};

const DropDownProfile = ({ onLogout }) => {
  return (
    <div className="dropDownProfile">
      <ul className="dropDownProfileul">
        <li>Profile</li>
        <li>Bookings</li>
        <li>Reviews</li>
        <li>Settings</li>
        <li onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
