import { createContext } from "react";

export const ContextStates = createContext()

let ContextStatesProvider = ({children})=>{

    let hamada = 'ahmed '
    return(
        <>
        <ContextStates.Provider value={{}}> 
            {children}
        </ContextStates.Provider>
        </>
    )
}
export default ContextStatesProvider
export const useProvFormik = ()=>{
    return useContext(ContextStates)  //usecontext is a hook that allows us to access the context in any component we want
}