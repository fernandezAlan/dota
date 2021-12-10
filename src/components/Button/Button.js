import React from "react";
import classes from './button.module.css'

const Button = ({label,type})=>{

    return (
        <>
        <button className={classes[type]}>{label}</button>
        </>
    )
}

export default Button