import React from "react";
import '../js/sidebar'
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Dashboard from '@material-ui/icons/Dashboard'
import MusicNote from '@material-ui/icons/MusicNote'
import SubscriptionsOutlined from  '@material-ui/icons/SubscriptionsOutlined'
import PersonOutlineOutlined from '@material-ui/icons/PersonOutlineOutlined'
import Ticket from '@material-ui/icons/BookOutlined'
import AddSong from '@material-ui/icons/FindReplaceSharp'
import Chart from "@material-ui/icons/FireplaceSharp";
import Genre from '@material-ui/icons/Album'


const Sidebar=()=>{
    return (<>


<div className="sidebar">
  <NavLink activeClass='active' to='/'><Dashboard/> Dashboard</NavLink>
  <NavLink activeClass='active' to="/song"><MusicNote/> Song</NavLink>
  <NavLink activeClass='active' to="/genre"><Genre/> Genre</NavLink>
  <NavLink activeClass='active' to="/alumb"><Genre/> Alumb</NavLink>
  <NavLink activeClass='active' to="/artist"><i class="fas fa-user-music"></i> Artist</NavLink>
  <NavLink activeClass='active' to="/subscription"><SubscriptionsOutlined/> Subscription</NavLink>
  <NavLink activeClass='active' to="/user"><PersonOutlineOutlined/> Users</NavLink>
  <NavLink activeClass='active' to="/ticket"><Ticket/> Ticket</NavLink>
  <NavLink activeClass='active' to="/chart"><Chart/> Chart</NavLink>
  <NavLink activeClass='active' to="/newSong"><AddSong/> New Song</NavLink>
  <br/>
  <hr/>
  <NavLink to="/logout">Logout</NavLink>
</div>

        </>

    )
}
export default Sidebar