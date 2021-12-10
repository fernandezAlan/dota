import React,{useEffect, useState,useContext} from "react";

import Card from '../Card/Card'
import {HeroesContex} from '../../contexts/HeroesContext'
import BoardOfHeroes from "../BoardOfHeroes/BoardOfHeroes";
import classes from './home.module.css'
import InputText from '../Input/Input' 
const Home=()=>{
 
    return(
        <div className={classes.background}>
       <BoardOfHeroes/>
        </div>
    )
}

export default Home