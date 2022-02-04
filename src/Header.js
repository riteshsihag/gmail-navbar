import React from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  

  return (
    <div className="header">
      <div className="header-left">
          <MenuIcon />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU"
          alt="gmail logo"
        />
      </div>
      <div className="header-middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon className="header-inputCaret" />
      </div>
      <div className="header-right">
          <AppsIcon />
          <NotificationsIcon />
          < AccountCircleIcon/>
      </div>
    </div>
  );
}

export default Header;
