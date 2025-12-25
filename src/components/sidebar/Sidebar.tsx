import React from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* SidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      {/* SidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>discord</h3>
          <ExpandMoreIcon />
        </div>
        {/* sideberChannles */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <h3>テキストチャンネル</h3>
              <ExpandMoreIcon />
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className="sidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
        </div>
      </div>

      <div className="sidebarFooter">
        <div className="sidebarAccount">
          <img src="./icon.png" alt="icon" width={60} height={60} />
          <div className="accontName">
            <h4>sana</h4>
            <span>#0123</span>
          </div>
        </div>
        <div className="sidebarVoice">
          <MicIcon sx={{ fontSize: 32 }} />
          <HeadphonesIcon sx={{ fontSize: 32 }} />
          <SettingsIcon sx={{ fontSize: 32 }} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
