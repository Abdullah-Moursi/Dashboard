import React from "react";
import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

export default function topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamama</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language/>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Settings/>
            </div>
            <img src="https://nitter.domain.glass/pic/profile_images%2F1437083195602780163%2Fer-yVTC5.jpg"
             alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
