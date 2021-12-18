import React, { useEffect,useState,useContext} from "react";
import classes from './heroPresentation.module.css'
import { HeroesContex } from "../../contexts/HeroesContext";
import { HeroContex } from "../../contexts/HeroContext";
import Abilities from "./Abilities/Abilities";
import ReactHtmlParser from 'react-html-parser';

const HeroPresentation =()=>{
    const [heroData,setHeroData] = useState(null)
    const heroContext = useContext(HeroContex)
    const attr =['strength','agility','intelligence']
    const attrEsp =['FUERZA','AGILIDAD','INTELIGENCIA']
    const attackCapability = [null,'cuerpo a cuerpo', 'a distancia']
    const attackCapabilityIcon=[null,'melee','ranged']
    const srcMultimedia = 'https://cdn.cloudflare.steamstatic.com/apps/dota2'
    const changeHeroSelected=(hero)=>{
        setHeroData(hero)
    }
  
    useEffect(()=>{
        changeHeroSelected(heroContext.state.selectedHero)
    },[heroContext.state.selectedHero])

    
    return (
        <>
        <div className={classes.presentation_container}>
            <section className={classes.container_hero_name}>
                <div className={classes.img_container}>
                    <img
                     src={`${srcMultimedia}/images/dota_react/heroes/${heroData?.name?.replace('npc_dota_hero_','')}.png`}
                     className={classes.profile_img}
                     />
                </div>
                <div className={classes.container_tittle_name}>
                    <span className={classes.hero_name}>
                        {heroData?.name_loc?.toUpperCase()}
                    </span>
                  
                </div>
                <span className={classes.img_attr}>
                        <img
                        style={{width:35,margin:5,backgroundColor: '#000000a1',
                            borderRadius: '50%'}}
                         src={`${srcMultimedia}/images/dota_react/icons/hero_${attr[heroData?.primary_attr]}.png`}
                         />
                </span>
                <section className={classes.attack}>
                    <section>
                        <div className={classes.statsInfo}>
                            <img className={classes.icon_stats} src={`${srcMultimedia}/images/dota_react//heroes/stats/icon_damage.png`}/>
                            <span style={{marginLeft:10}}>
                                {heroData?.damage_min}{'-'}{heroData?.damage_max}
                            </span>
                        </div>
                        <div className={classes.statsInfo}>
                            <img className={classes.icon_stats} src={`${srcMultimedia}/images/dota_react//heroes/stats/icon_armor.png`}/>
                            <span style={{marginLeft:10}}>
                                {heroData?.armor?.toFixed(1)}
                            </span>
                        </div>
                        <div className={classes.statsInfo}>
                            <img className={classes.icon_stats} src={`${srcMultimedia}/images/dota_react//heroes/stats/icon_movement_speed.png`}/>
                            <span style={{marginLeft:10}}>
                                {heroData?.movement_speed}
                            </span>
                        </div>
                    </section>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <section style={{display:'flex',marginTop:5,justifyContent:'space-evenly'}}>
                            <img 
                            src={`${srcMultimedia}/images/dota_react/icons/${attackCapabilityIcon[heroData?.attack_capability]}.svg`}
                            style={{width:20}}
                            />
                            <span style={{marginLeft:10}}>{attackCapability[heroData?.attack_capability]}</span>
                        </section>
                    </div>
                </section>
                <section className={classes.attr}>
                    <div className={classes.attrContainer} >
                        <img style={{width:25,height:25}}src={`${srcMultimedia}/images/dota_react/icons/hero_strength.png`}/>
                        <span className={classes.attrInfo}>
                            {heroData ? heroData.str_base : 0}
                        </span>
                        <span className={classes.attrGain}>
                            + {heroData ? heroData?.str_gain?.toFixed(1) : 0}
                        </span>
                    </div>
                    <div className={classes.attrContainer}>
                                <img style={{width:25,height:25}}src={`${srcMultimedia}/images/dota_react/icons/hero_agility.png`}/>
                                <span className={classes.attrInfo}>
                                {heroData ? heroData.agi_base : 0}
                                </span>
                                <span className={classes.attrGain}>
                                 + {heroData ? heroData?.agi_gain?.toFixed(1) : 0}
                                 </span>
                            </div>
                            <div className={classes.attrContainer}>
                                <img style={{width:25,height:25}}src={`${srcMultimedia}/images/dota_react/icons/hero_intelligence.png`}/>
                                <span className={classes.attrInfo}>
                                {heroData ? heroData.int_base : 0}
                                </span>
                                <span className={classes.attrGain}>
                                 + {heroData ? heroData?.int_gain?.toFixed(1) : 0}
                                 </span>
                            </div>
                        </section>
                    
                {/*

                <span style={{fontSize:15,color:'#ffffff8c',letterSpacing:2}}>
                     Heroe de {attrEsp[heroData?.primary_attr]}
                </span>
                */}
            </section>
            <video
            src={`${srcMultimedia}/videos/dota_react/heroes/renders/${heroData? heroData.name.replace('npc_dota_hero_',''):'antimage'}.webm`} type="video/mp4"
             width="550"
            height="400"
            autoPlay 
            loop 
            muted 
            className={classes.video_style}
            >
            </video>
            <div  style={{
                position: 'absolute',
                zIndex: 1,
                width:650,
                color:"white",
                height:500,
                display:'flex',
                flexDirection:'column'
                }}>
                    <div className={classes.container_info_hero}>
                        <section className={classes.hype_loc}>
                            {ReactHtmlParser(heroData?.hype_loc)}
                        </section>
                        <div className={classes.tittle}>
                            <span>HABILIDADES</span>
                        </div>
                    </div>
                   <Abilities habilities={heroData?.abilities}/>
            </div>
        </div>
            
        </>
    )

}
export default HeroPresentation