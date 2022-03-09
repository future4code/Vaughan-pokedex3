import React from "react"
import { BASE_URL } from "../Constants/Urls";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext"

function GlobalState(props) {

    const [listaPoke, setListaPoke] = useRequestData([], `${BASE_URL}/pokemon`);

    return (
        <GlobalStateContext.Provider value={{ listaPoke, setListaPoke}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState;