
import React from "react";
import { IconWrapper } from "./PageIcon.styled";

function PageIcon({ onClick }){
    return (
        <IconWrapper onClick={onClick}>
            <p className="name">Roman</p> 
            <p className="surname">Dranchuk</p>
        </IconWrapper>
    )
}

export default PageIcon;