import React,{useContext} from "react";
import {getHeroDetails} from '../../providers/heroesRequest'
import { HeroContex } from "../../contexts/HeroContext";
const Card=({nombre,atributo,roles,id})=>{
    const heroContex = useContext(HeroContex)

    const getHeroInfo=()=>{
        getHeroDetails(id).then(hero=>{
            const payload ={
                selectedHero: hero.data
            }
            heroContex.dispatch({
                type:'save',
                payload
            })
        })
    }

    return(
        <>
                <img 
                id={`hero_img_${nombre.toLowerCase()}`}
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${nombre.replace('npc_dota_hero_','')}.png`}
                alt={'hero_img_'+ nombre}
                style={{
                    width:100,
                    height:70,
                    margin:5,
                    cursor:'pointer'
                }}
                onClick={getHeroInfo}
                />
        </>
    )
}

export default Card