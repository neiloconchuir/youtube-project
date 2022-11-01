import React from 'react';
import './header.css';
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <header className="header">
      <div className="header_left">
        <MenuSharpIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>

      <div className="header_input">
        <input type="text" placeholder="Search" />
        <SearchSharpIcon className="header_inputButton" />
      </div>

      <div className="header_icons">
        <VideoCallSharpIcon className="header_icon" />
        <AppsSharpIcon className="header_icon" />
        <NotificationsSharpIcon className="header_icon" />
        <Avatar className="header_icon">N</Avatar>
      </div>
    </header>
  );
}

export default Header