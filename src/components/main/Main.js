import './Main.css';
import {useEffect, useState} from "react";


function Main() {

    const [allLinks, setAllLinks] = useState([])

    useEffect(() => {
        setAllLinks([
            {
            name: "Twitch",
            link: "https://twitch.tv/uflaxderechte/",
            icon: "bi-twitch"
        },{
            name: "Instagram",
            link: "https://instagram.com/uflaxderechte/",
            icon: "bi-instagram"
        },{
            name: "YouTube",
            link: "https://youtube.com/c/uflaxderechte/",
            icon: "bi-youtube"
        }
        ])
    }, []);


    return (
        <>
            <video autoPlay muted loop id="background">
                <source src="https://assets.uflaxderechte.org/uflaxderechte/background_gif.mp4" type="video/mp4" />
            </video>
            <div className="mid">
                <div className="logo-div">
                    <img src="https://assets.uflaxderechte.org/logos/ux-white.png" className="logo-mid logo-img"/>
                    <div className="logo-mid overlay"></div>
                </div>
                <div className="logoSubLinks">
                    {
                        allLinks.map((x) => {
                            return <>
                            <a href={x.link}>
                                <i className={`bi ${x.icon}`}></i>{x.name}
                            </a>
                            </>;
                        })
                    }
                </div>
                <div className={"logoSubText"}>
                    <h1>Wer bin ich?</h1>
                    <h3>Ich bin Uflax, ich streame gerne auf Twitch und teile mein Leben mit meiner Community.</h3>
                    <h3>Falls du mal vorbeischauen magst, mach dass gerne <a href={"https://twitch.tv/uflaxderechte/"} target={"_blank"}>hier</a>!</h3>
                    <h2>LG Uflax</h2>
                </div>
            </div>
        </>
    );
}

export default Main;

//Ablage
<video src="https://assets.uflaxderechte.org/logos/komp1.webm" type="video/webm" className="logo-mid logo-vid" autoPlay muted loop/>