import React from "react";
import classes from './abilities.module.css'

import InformationSkill from "../InformationSkill/InformationSkill";
const Abilities = ({habilities})=>{
    const mouseEnter = (id, index)=>{
        const infoSkill = document.getElementById(id+'_info')
        const imgSkill = document.getElementById(id+'_img')
       
        imgSkill.style.width='120%'
        infoSkill.style.display='block'
    }
    const mouseLeave = (id)=>{
        const infoSkill = document.getElementById(id+'_info')
        const imgSkill = document.getElementById(id+'_img')

        imgSkill.style.width='100%'
        infoSkill.style.display='none'
    }

    return(
        <section className={classes.container_abilities}>
            <div className={classes.container_icons}>
                {habilities?.map((ability,index)=>{
                    return(
                        <div className={classes.container_icon}
                        key={ability.id}
                          >
                            <div className={classes.container_skill_info}
                              id={ability.name}
                             >
                                 <div
                                   onMouseEnter={()=>mouseEnter(ability.name,index)}
                                   onMouseLeave={()=>mouseLeave(ability.name)}
                                 >
                                    <InformationSkill ability={ability}/>
                                 </div>
                                <img
                                id={ability.name+'_img'}
                                onMouseEnter={()=>mouseEnter(ability.name,index)}
                                onMouseLeave={()=>mouseLeave(ability.name)}
                                className={classes.img_skill}
                                    src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${ability.name}.png`}
                                    />
                            </div>
                        </div>)
                    })
                }
            </div>
        </section>
    )

}

export default Abilities