import React from "react";
import classes from './abilities.module.css'
import ReactHtmlParser from 'react-html-parser';

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
                                    <section 
                                    className={classes.info_skill} 
                                    id={ability.name+'_info'}
                                    >
                                    <div className={classes.tittle_ability}>
                                        <span>
                                            {ability?.name_loc.toUpperCase()}
                                        </span>
                                    </div>
                                    <div className={classes.sub_skill_info}>{
                                        ability?.damage ? (
                                            <>
                                        <span className={classes.skill_label}>
                                            TIPO DE DAÑO : 
                                        </span>
                                        <span style={{
                                            color:ability?.damage === 1 ? 'red' : 'rgb(163, 220, 238)',
                                            fontSize:12,
                                            letterSpacing:2,
                                            marginLeft:5
                                        }}>
                                            {ability?.damage === 1 ? 'Físico' : 'Mágico'}
                                        </span>
                                            </>
                                        ) : null
                                        }
                                    </div>
                                    <div className={classes.text_info_skill}>
                                        {ReactHtmlParser(ability.desc_loc)}
                                    </div>
                                    <div style={{display:'flex',flexDirection:'column'}}>
                                        {ability.special_values.map(value=>{
                                            return(
                                                value.heading_loc ? (
                                                    <section 
                                                     className={classes.center_element}
                                                     key={value.name}
                                                     style={{marginBottom:5}}
                                                     >
                                                        <div className={classes.skill_label}>
                                                            {value.heading_loc}
                                                        </div>
                                                        <span className={classes.special_value}>
                                                            {value.values_int.length > 0 
                                                            ? value.values_int.join(' /')
                                                            : (value.values_int[0] 
                                                                ? value.values_int[0].toFixed(1) 
                                                                : value.values_float[0].toFixed(1))}
                                                        </span>
                                                    </section>
                                                ) : null
                                            )
                                        })}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center'}}>
                                        <div className={classes.mana_icon}></div>
                                        <span className={classes.special_value}>{ability.mana_costs.length > 0 
                                        ? ability.mana_costs.join(' /')
                                        : ability.mana_costs[0] }</span>
                                    </div>
                                    </section>
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