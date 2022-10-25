import React, {useEffect, useState} from 'react';
import "./News.css";

import NewsWrapper from "./newsWrapper/NewsWrapper";

import {generateUUID} from "../../../utils/generateUUID";

function News() {

    const [allNews, setAllNews] = useState([]);

    /*useEffect(() => {

        let getNews = async () => {

            console.log("This New's Posts are fetched from my https://api.uflaxderechte.org/ ,if you want to get a look :D")

            const response = await fetch(`https://uflaxderechte.org:5000/news/allNews`)
            const data = await response.json();

            setAllNews(data.allNews);
        };

        getNews();

    }, []);*/

    useEffect(() => {
        setAllNews([{
                "title": "Dokomi2022",
                "desc": "Dieses Jahr am 04/05.06 war die Dokomi2022! Wir waren dabei und haben ein paar coole Bilder geschossen. ",
                "imageList": ["https://assets.uflaxderechte.org/uflaxderechte/news/img/286420816.jfif", "https://assets.uflaxderechte.org/uflaxderechte/news/img/286420815.jfif", "https://assets.uflaxderechte.org/uflaxderechte/news/img/286420817.jpg"],
                "timestamp": 1265945460770
            }, {
                "title": "Twitch",
                "desc": "Ich streame auf Twitch gerne JustChatting oder spiele Games mit meinem Chat, schau doch gerne rein unter https://twitch.tv/uflaxderechte/! ",
                "imageList": ["https://assets.uflaxderechte.org/uflaxderechte/news/uflaamazed.png"],
                "timestamp": 1665945460770
            }, {
                "title": "Community-Server",
                "desc": "Spiel mit mir und meiner Community auf meinem Community-Server!",
                "imageList": ["https://assets.uflaxderechte.org/uflaxderechte/news/img/286420821.png", "https://assets.uflaxderechte.org/uflaxderechte/news/img/286420819.png", "https://assets.uflaxderechte.org/uflaxderechte/news/img/286420820.png", "https://assets.uflaxderechte.org/uflaxderechte/news/img/286420818.png"],
                "timestamp": 1665945460770
            }]);
    }, []);


    return (
        <>
            <div className="back-rev">
                <video autoPlay muted loop id="background-reverse">
                    <source src="https://assets.uflaxderechte.org/uflaxderechte/background_gif.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="header">
                <h1>News</h1>
                <h4>Hier gibts News über mich und meine SocialMedia Kanäle!</h4>
            </div>
            <div className="news">
                {
                    allNews.map((x, index) => {
                        return (<NewsWrapper title={x.title} desc={x.desc} imageList={x.imageList} id={generateUUID()} timestamp={x.timestamp} key={generateUUID()} />)
                    })
                }
            </div>
        </>
    );
}

export default News;