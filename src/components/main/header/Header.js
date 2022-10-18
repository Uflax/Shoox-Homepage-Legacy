import React, {useEffect, useState} from 'react';
import "./Header.css";

import "../../../utils/burger/burger.css";

function Header() {

    const [allHeaderLinks, setAllHeaderLinks] = useState([]);

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    useEffect(() => {

        setAllHeaderLinks([
            {
                title: "Home",
                link: "/"
            },{
                title: "News",
                link: "/news"
            },{
                title: "SocialMedia",
                link: "/social"
            },{
                title: "Merch",
                link: "/merch"
            },{
                title: "Netzwerk",
                link: "https://network.uflaxderechte.org/"
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
                <h1>UFLAXDERECHTE</h1>
            </div>
            <div className="HeaderLinks">
                <div className={`hamburger ${isActive ? "active" : null}`} onClick={handleToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-menu ${isActive ? "active" : null}`}>
                    {
                         allHeaderLinks.map((x) => {
                            return <>
                            <a href={x.link}>
                                <li className="nav-item">
                                    {x.title}
                                </li>
                            </a>
                            </>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;