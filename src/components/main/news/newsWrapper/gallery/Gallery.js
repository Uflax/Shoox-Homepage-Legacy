import React from 'react';
import "./Gallery.css";

function Gallery({imageList}) {


    return (
        <div className={"gallery"}>
            <div className={"top"}>
                {
                    imageList.length === 1 && <img src={imageList[0]} className="onlyImage"/>

                }
                {
                    imageList.length === 2 &&
                    imageList.map((x, index) => {
                        return (<img src={x} className={"twoImages"}/>)
                    })
                }
                {
                    imageList.length === 3 &&
                    imageList.map((x, index) => {
                        if (index === 0) {
                            return (<img src={x} className={"moreImagesFirst"}/>)
                        }
                    })
                }
                {
                    imageList.length === 4 &&
                    imageList.map((x, index) => {
                        if (index === 0) {
                            return (<img src={x} className={"moreImagesFirst"}/>)
                        }
                    })
                }
            </div>
            <div className={"bottom"}>
                {
                    imageList.length === 3 &&
                    imageList.map((x, index) => {
                        if (index > 0) {
                            return (<img src={x} className={"threeImages"}/>)
                        }
                    })
                }
                {
                    imageList.length === 4 &&
                    imageList.map((x, index) => {
                        if (index > 0) {
                            return (<img src={x} className={"fourImages"}/>)
                        }
                    })
                }
            </div>

        </div>
    );
}

export default Gallery;