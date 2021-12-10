import React from "react";
import Button from "../Button/Button";
import InputText from "../Input/Input";
const NavigationHeroes =()=>{
    return(
    <>
    <nav>
            <Button label={'todos los heroes'} type={'allHeroes_selector'}/>
            <Button label={'agilidad'} type={'agility_selector'}/>
            <Button label={'fuerza'} type={'strong_selector'}/>
            <Button label={'inteligencia'} type={'intelligence_selector'}/>
            <InputText/>
    </nav>
    </>
    )
}

export default NavigationHeroes