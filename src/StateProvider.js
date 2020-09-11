import React, { createContext, useContext, useReducer } from "react";
//reateContext,useContext,useReducer是api的東西
//把數據層準備好
export const StateContext = createContext();

//這個高階組件, 本質上有涵蓋需要的應用程式, 包裝在StatProvider//

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//這裡是使用者自己的資料//
export const useStateValue = () => useContext(StateContext);
