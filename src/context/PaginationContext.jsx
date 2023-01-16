import { createContext, useState, useContext } from "react";
import { ServiceContext } from "./ServiceContext";

export const PaginationContext = createContext();

const PaginationContextProvider = ({ children }) => {
    const { getPokemonsAxios } = useContext(ServiceContext);
    const [ page, setPage ]= useState(1);

  const nextPage = () => {
    getPokemonsAxios(page + 1);
    setPage(page + 1);
  };

  const prevPage = () => {
    getPokemonsAxios(page - 1);
    setPage(page - 1);
  };

  return (
    <PaginationContext.Provider value={{
        nextPage,
        prevPage,
        page
    }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default  PaginationContextProvider;