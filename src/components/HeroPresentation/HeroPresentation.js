import React, { useEffect,useState,useContext} from "react";
import classes from './heroPresentation.module.css'
import { HeroesContex } from "../../contexts/HeroesContext";
import { HeroContex } from "../../contexts/HeroContext";
const HeroPresentation =()=>{
    const [heroData,setHeroData] = useState(null)
    const heroContext = useContext(HeroContex)
    const changeHeroSelected=(hero)=>{
        setHeroData(hero)
    }
    useEffect(()=>{
        changeHeroSelected(heroContext.state.selectedHero)
    },[heroContext.state.selectedHero])

    useEffect(()=>{
        console.log('heroData',heroData)
    },[heroData])
    return (
        <>
        <div className={classes.presentation_container}>
            <section className={classes.hero_name}>
                <span><img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'/></span><span>ANTI MAGE</span>
                <p style={{
                            margin:0,
                            fontFamily:"'PT Serif', serif",
                            opacity:'80%',
                            fontSize:'20px',
                            letterSpacing:'3px'
                            }}>
                        Corta a sus enemigos con ataques que agotan el maná
                        </p>
            </section>
            <video
            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroData? heroData.name.replace('npc_dota_hero_',''):'antimage'}.webm`} type="video/mp4"
             width="650" height="500" autoPlay loop muted className={classes.video_style}>
            </video>
            <div  style={{
                position: 'absolute',
                zIndex: 1,
                width:650,
                color:"white",
                height:500,
                display:'flex',
                justifyContent:'space-between',
                flexDirection:'column'
                }}>
                    <section className={classes.infoHero}>
                        <section>
                            <div style={{display:'flex'}}>
                                <img style={{width:35,height:35}}src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'/>
                                <span style={{display:'flex',alignItems:'center',fontSize:20,marginLeft:10}}>23</span>
                            </div>
                            <div style={{display:'flex'}}>
                                <img style={{width:35,height:35}}src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'/>
                                <span style={{display:'flex',alignItems:'center',fontSize:20,marginLeft:10}}>24</span>
                            </div>
                            <div style={{display:'flex'}}>
                                <img style={{width:35,height:35}}src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'/>
                                <span style={{display:'flex',alignItems:'center',fontSize:20,marginLeft:10}}>12</span>
                            </div>
                        </section>
                        <section>
                                <div style={{display:'flex'}}>
                                    <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png'/>
                                    <span>80</span>
                                </div>
                                <div style={{display:'flex'}}>
                                    <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png'/>
                                    <span>80</span>
                                </div>
                                <div style={{display:'flex'}}>
                                    <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png'/>
                                    <span>80</span>
                                </div>
                        </section>
                    </section>
                    <section style={{display:"flex",justifyContent:'center',flexDirection:'column',marginTop:25}}>
                        <div style={{letterSpacing:'2px',textAlign:'center',fontFamily:'PT Serif'}}>
                            <span>HABILIDADES</span>
                        </div>
                        <div style={{display:"flex",justifyContent:'center'}}>
                            <img className={classes.img_skill} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png' />
                            <img className={classes.img_skill} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_blink.png' />
                            <img className={classes.img_skill} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_counterspell.png' />
                            <img className={classes.img_skill} src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_void.png' />
                        </div>
                    </section>
            </div>
        </div>
            
        </>
    )

}
export default HeroPresentation