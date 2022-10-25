import React, {useEffect} from 'react';
import "./NewsWrapper.css";

import Gallery from "./gallery/Gallery";

import {parseTextToLinks} from "../../../../utils/regExp";

function NewsWrapper ({title, desc, imageList, id}) {

    desc = parseTextToLinks(desc)

    let titleID = "title-" + id;
    let descID = "desc-" + id;
    let moreID = "moreButton-" + id;

    useEffect(() => {

        document.getElementById(titleID).innerHTML = title;
        document.getElementById(descID).innerHTML = desc;

        if (
            desc.length > 65
        ) {
            document.getElementById(moreID).addEventListener("click", ()=>{
                if (document.getElementById(descID).clientHeight === 55) {
                    setTimeout(() => {
                        document.getElementById(descID).style.height = "100%";
                        document.getElementById(moreID).innerHTML = "Weniger anzeigen";
                    }, 10)
                } else if (document.getElementById(descID).clientHeight > 55) {
                    setTimeout( () => {
                        document.getElementById(descID).style.height = "55px";
                        document.getElementById(moreID).innerHTML = "Mehr anzeigen";
                    }, 10)
                }
            })
        }

    }, []);

    return (
        <div className={"newsWrapperItem"}>
            <Gallery imageList={imageList} key={id}/>
            <div className={"details"}>
                <h1 id={titleID}></h1>
                <h3 id={descID}></h3>
            </div>
            {
                desc.length > 65 &&
                <span id={moreID} className={"more"}>Mehr anzeigen</span>
            }
        </div>
    );
}

export default NewsWrapper;