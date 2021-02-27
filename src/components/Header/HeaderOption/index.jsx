import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function HeaderOption(props) {
    return (
        <Link to={props.link} style={{textDecoration: "none"}}>
            <div onClick={props.onClick ? props.onClick : undefined} className="headerOption">
                <span className="headerOption__optionOne">{props.lineOne}</span>
                <span className="headerOption__optionTwo">{props.lineTwo}</span>
            </div>
        </Link>
    )
}

export default HeaderOption
