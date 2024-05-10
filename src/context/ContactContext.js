import {createContext, useState } from "react";

export const ContatContext = createContext()
export const ContactProvider = ({children }) => {
        const [editItem, setEditItem] = useState([])

        const items = {setEditItem, editItem}

    return(
        <ContatContext.Provider value={{items}}>
            {children }
        </ContatContext.Provider>
    )
}