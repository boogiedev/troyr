import { useEffect, useState } from "react";

export const WindowPosition = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {
        window.removeEventListener("resize", updateWidthAndHeight)
        };
    });
    return {width:window.innerWidth, height:window.innerHeight};
};



