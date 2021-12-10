import React from "react";
import classes from './nav.module.css'

const Nav = ()=>{

    return (
        <nav className={classes.navigation}>
            <div className={classes.img_container}>
            <img className={classes.img_logo} alt='dota_logo' src ='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png'/>
            </div>
            <div className={classes.container_items}>
                <span className={classes.item_element}>Inicio</span>
                <span className={classes.item_element}>¿Cómo jugar?</span>
                <span className={classes.item_element}>Héroes</span>
                <span className={classes.item_element}>Items</span>
            </div>
        </nav>
    )
}

export default Nav