import React, {useEffect, useState} from 'react';
import "./Header.css";

import {Link} from "react-router-dom";

import Logo from "./components/uflaxderechteSVG";

function Header() {

    const [internHeaderLinks, setInternHeaderLinks] = useState([]);
    const [externHeaderLinks, setExternHeaderLinks] = useState([]);

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    useEffect(() => {

        setInternHeaderLinks([
            {
                title: "Home",
                link: "/"
            },{
                title: "News",
                link: "/news"
            }
        ])

        setExternHeaderLinks([
            {
                title: "UX-Media",
                link: "https://uxmedia.uflaxderechte.org/"
            },{
                title: "Netzwerk",
                link: "https://network.uflaxderechte.org/"
            },{
                title: "UX-API",
                link: "https://api.uflaxderechte.org/"
            },{
                title: "Cloud",
                link: "https://cloud.uflaxderechte.org/"
            }
        ])

        document.querySelector(".hamburger").addEventListener("click", ()=>{
            document.querySelector(".hamburger").classList.toggle("active");
            document.querySelector(".nav-menu").classList.toggle("active");
        })

    }, []);


    return (
        <div id="HeaderNav">
            <div className="HeaderLogo">
                <a href="/">
                    <img src="https://assets.uflaxderechte.org/logos/ux-white.png" alt="Logo" width="50px" height="50px"/>
                </a>
            </div>
            <div className="title">
                <Logo />
            </div>
            <div className="HeaderLinks">
                <div className={`hamburger ${isActive ? "active" : null}`} onClick={handleToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-menu ${isActive ? "active" : null}`}>
                    {
                         internHeaderLinks.map((x, index) => {
                            return <Link to={x.link} key={index}>
                                <li className="nav-item">
                                    {x.title}
                                </li>
                            </Link>
                        })
                    }
                    {
                        externHeaderLinks.map((x, index) => {
                            return <a href={x.link} key={index} target="_blank">
                                <li className="nav-item">
                                    {x.title}
                                </li>
                            </a>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;