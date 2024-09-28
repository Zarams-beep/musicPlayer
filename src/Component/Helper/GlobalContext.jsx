import { useState, createContext } from "react";
import Pop from "../../JsonFile/Pop";
import Rock from "../../JsonFile/Rock";
import Hiphop from "../../JsonFile/Hiphop";
import Electronic from "../../JsonFile/Electronic";
import { shuffleArray } from "./Shuffle";
export const GlobalContext = createContext()

export function GlobalProvider({children}) {
    const [isSwitch,setIsSwitch] = useState(true)
    const [allData,setAllData] = useState(shuffleArray([...Pop,...Rock,...Hiphop,...Electronic]))
    const [search,setSearch] = useState("")

    const handleSwitch = () => {
        setIsSwitch(!isSwitch);
        console.log(isSwitch);
        const rootElement = document.querySelector(':root');
        isSwitch? rootElement.classList.add('dark'):rootElement.classList.remove('dark')

      };

    const contextObject = {
        isSwitch,
        handleSwitch,
        allData,
        Pop,
        Rock,
        Hiphop,
        Electronic,
        setSearch,
        search
    }

    return (
        <GlobalContext.Provider value={contextObject}>
            {children}
       
        </GlobalContext.Provider>
      );
}