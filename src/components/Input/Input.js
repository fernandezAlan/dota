import React,{useState} from "react";

const InputText = ({heroes,setHeroes})=>{
    const [value, setValue] = useState('')

    const handleChange = (event)=>{
        const value= event.target.value
        setValue(value)
        const heroFilter = heroes.filter(hero=>{
          return  hero.localized_name.toUpperCase().includes(value.toUpperCase())
        })
        setHeroes(heroFilter)
    }

    return (
        <>
            <input type='text'
            onChange={handleChange}
            value={value}
            />
        </>
    )

}

export default InputText