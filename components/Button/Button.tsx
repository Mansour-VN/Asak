import { NextPage } from "next";
import * as React from 'react'
import { IconType } from "react-icons/lib";


interface Props {
    text : string,
    icons? :IconType,
    size : string, 
    color? : string
}


const Button : React.FC<Props> = ({text, icons, size, color})=>{
    return(
        <button className={`btn btn--${size} btn--${color} `}>{`${text} ${icons? `${icons}`: ""}`}</button>
    )
}

export default Button;