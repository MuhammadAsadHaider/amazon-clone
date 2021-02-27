import React from "react";
import "./style.css";
import Logo from "../Logo";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import ShoppingBasket from "../ShoppingBasket";
import { useStateValue } from "../StateProvider";
import {auth} from '../../firebase';

function Header() {
  const [{user}] = useStateValue();
  const logOut = ()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <nav className="header">
      <Logo />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <HeaderOption onClick={logOut} link={!user && "/login"} lineOne={user ? `Hello ${user.email}` : "Hello!"} lineTwo={user ? "Sign Out" : "Sign In"} />
        <HeaderOption link="/" lineOne="Returns" lineTwo="& Orders" />
        <HeaderOption link="/" lineOne="Your" lineTwo="Prime" />

        <ShoppingBasket />
      </div>
    </nav>
  );
}

export default Header;
