import * as React from 'react';

const heroes = {
  selectedHero:null
};

export const HeroContex = React.createContext();


const reducer = (state, action) => {
  //
  switch (action.type) {
    case 'save':
    const _state = {
        selectedHero : action.payload.selectedHero
    }
      return _state;

    default:
      throw new Error();
  }
};

export const HeroContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, heroes);
  const value = { state, dispatch };

  return (
    <HeroContex.Provider value={value}>{children}</HeroContex.Provider>
  );
};

export const HeroContexConsumer = HeroContex.Consumer;
