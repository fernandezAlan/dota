import axios from 'axios'

export const getHeroes = async()=>{
    const url = 'https://api.opendota.com/api/heroes'
    const response = await  axios.get(url)
    return response
}

export const getHeroDetails=async(heroId)=>{
    const url ='http://localhost:3000/api/hero/'+heroId
    const response = await  axios.get(url)
    return response
}