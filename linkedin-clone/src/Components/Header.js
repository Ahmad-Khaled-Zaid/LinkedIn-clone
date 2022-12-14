import React from "react";
import './Header.css'
import HeaderOption from "./HeaderOption";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    return (
        <div className="header" >
            <div className="header__left">
                <img src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"} alt="LinkedIn logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__option__section">
                    <HeaderOption title="Home" Icon={HomeIcon} />
                    <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                    <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                    <HeaderOption title="Chat" Icon={ChatIcon} />
                    <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                    {/* <HeaderOption title="Ahmad Zaid" avatar={'https://avatars.githubusercontent.com/u/85874276?s=400&u=8970af3c62d8926e749fb4e49fd8aeb5612af5e3&v=4'} /> */}

                </div>
            </div>
        </div>
    )
}
export default Header