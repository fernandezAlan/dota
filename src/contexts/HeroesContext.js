import * as React from 'react';

const heroes = {
    agility:[],
    strong:[],
    intelligence:[]
};

export const HeroesContex = React.createContext();


const reducer = (state, action) => {
  //
  switch (action.type) {
    case 'save':
    const allHeroes= action.payload.heroes
    const agility= allHeroes.filter(hero=>hero.primary_attr==='agi')
    const strong= allHeroes.filter(hero=>hero.primary_attr==='str')
    const intelligence= allHeroes.filter(hero=>hero.primary_attr==='int')
    const _state = {
      agility,
      strong,
      intelligence
    }
      return _state;

    default:
      throw new Error();
  }
};

export const HeroesContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, heroes);
  const value = { state, dispatch };

  return (
    <HeroesContex.Provider value={value}>{children}</HeroesContex.Provider>
  );
};

export const HeroesContexConsumer = HeroesContex.Consumer;
