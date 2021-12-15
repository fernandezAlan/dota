import React,{useState, useContext,useEffect} from "react";
import { HeroesContex } from "../../contexts/HeroesContext";
import { HeroContex } from "../../contexts/HeroContext";
import Card from '../Card/Card'
import {getHeroes} from '../../providers/heroesRequest'
import classes from './boardOfHeroes.module.css'
import HeroPresentation from '../HeroPresentation/HeroPresentation'
import NavigationHeroes from "../NavigationHeroes/NavigationHeroes";
const BoardOfHeroes = ()=>{
    const [agilityHeroes, setAgilityHeroes] = useState(null)
    const [strongHeroes, setStrongHeroes] = useState(null)
    const [intelligenceHeroes, setIntelligenceHeroes] = useState(null)
    const [allHeroes, setAllHeroes] = useState(null)
    const heroesContex = useContext(HeroesContex)
    const heroContext = useContext(HeroContex)
    const sectionStyle={
        display:'flex',
        flexDirection:'column'
    }
    useEffect(()=>{
        getHeroes().then(heroes=>{
            const payload = {
                heroes:heroes.data
            }
            heroesContex.dispatch({
                type:'save',
                payload
            })

        })
      
    },[])
    const setHeroes = ()=>{
        setAgilityHeroes(heroesContex.state.agility)
        setStrongHeroes(heroesContex.state.strong)
        setIntelligenceHeroes(heroesContex.state.intelligence)
        if(agilityHeroes && strongHeroes && intelligenceHeroes){
            const ah = agilityHeroes.concat(strongHeroes,intelligenceHeroes)
            setAllHeroes(ah)
            heroContext.dispatch({
                type:'save',
                payload:{
                    selectedHero:ah[0]
                }
            })
        }

    }
 
    useEffect(()=>{
        setHeroes()
    },[heroesContex.state,agilityHeroes,strongHeroes,intelligenceHeroes])
 



    return (
        <div style={{width:'100%', display:'flex'}}>
            <section style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <div className={classes.filter_container}>
                    <div className={classes.item_filter}>
                        FILTROS:
                    </div>
                    <div style={{
                        width:' 100%',
                        display: 'flex',
                        justifyContent: 'space-around'
                        }}>
                            <section style={sectionStyle}>
                        <span className={classes.item_filter}>
                            ROL 
                        </span>
                            <select className={classes.input_search}>
                                <option value="rol_1">rol</option>
                                <option value="rol_1">rol</option>
                                <option value="rol_1">rol</option>
                                <option value="rol_1">rol</option>
                            </select>
                            
                        </section>
                        <section style={sectionStyle}>
                            <span className={classes.item_filter}>ATRIBUTO PRINCIPAL</span>
                            <span style={{
                                display:'flex',
                                justifyContent: 'space-evenly'}}>
                                <img style={{
                                    width: '35px',
                                    margin: '5px'
                                            }} 
                                    src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png'/>
                                <img style={{
                                    width: '35px',
                                    margin: '5px'
                                            }} 
                                    src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png'/>
                                <img style={{
                                    width: '35px',
                                    margin: '5px'
                                            }} 
                                    src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png'/>
                            </span>
                        </section>
                        <section style={sectionStyle}>
                        <span  className={classes.item_filter}>
                            NOMBRE 
                        </span>
                            <input type='text' className={classes.input_search}/>               
                        </section>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <section className={classes.board}>
                        {allHeroes ? allHeroes.map(hero=>(<Card key={hero?.name}nombre ={hero.name} id={hero.id}/>)):<div>Loading..</div>}
                    </section>
                </div>
            </section>
            <section>
                <HeroPresentation />
            </section>
        </div>
    )
}
export default BoardOfHeroes